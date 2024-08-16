from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import permissions, viewsets, status
from rest_framework.response import Response
from rest_framework.exceptions import NotAcceptable, ValidationError, PermissionDenied
from django.utils.translation import gettext_lazy as _
from .models import Cart, CartItem
from products.models import Product
from .serializers import CartItemSerializer, CartItemUpdateSerializer, CartSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [permissions.IsAuthenticated]

class CartItemListCreateAPIView(ListCreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(cart__user=self.request.user)

    def perform_create(self, serializer):
        user = self.request.user
        cart = get_object_or_404(Cart, user=user)
        product = get_object_or_404(Product, pk=self.request.data["product"])

        if user == product.seller:
            raise PermissionDenied(_("You cannot add your own product to the cart."))

        if CartItem.objects.filter(cart=cart, product=product).exists():
            raise NotAcceptable(_("This product is already in your cart."))

        quantity = self.request.data.get("quantity", 1)
        if quantity > product.quantity:
            raise NotAcceptable(_("Requested quantity exceeds available stock."))

        cart_item = serializer.save(cart=cart, product=product, quantity=quantity)
        cart.total += product.price * quantity
        cart.save()
        return cart_item

class CartItemRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = CartItemUpdateSerializer
    queryset = CartItem.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        cart_item = self.get_object()
        product = get_object_or_404(Product, pk=self.request.data["product"])

        if cart_item.cart.user != self.request.user:
            raise PermissionDenied(_("This cart does not belong to you."))

        quantity = self.request.data.get("quantity", 1)
        if quantity > product.quantity:
            raise NotAcceptable(_("Requested quantity exceeds available stock."))

        serializer.save()

    def perform_destroy(self, instance):
        if instance.cart.user != self.request.user:
            raise PermissionDenied(_("This cart does not belong to you."))
        instance.delete()