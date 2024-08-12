from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from products.models import Product
from .serializers import CartItemSerializer, CartSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

class CartItemViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        user = request.user
        queryset = CartItem.objects.filter(cart__user=user)
        serializer = CartItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        user = request.user
        cart = get_object_or_404(Cart, user=user)
        product = get_object_or_404(Product, pk=request.data["product"])
        current_item = CartItem.objects.filter(cart=cart, product=product)

        if user == product.user:
            return Response({"error": "You can't add your own product to cart"}, status=status.HTTP_400_BAD_REQUEST)

        if current_item.exists():
            return Response({"error": "Product already in cart"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            quantity = int(request.data["quantity"])
        except ValueError:
            return Response({"Please provide one quantity"}, status=status.HTTP_400_BAD_REQUEST)

        if quantity > product.quantity:
            return Response({"error": "Quantity is greater than available stock"}, status=status.HTTP_400_BAD_REQUEST)

        cart_item = CartItem(cart=cart, product=product, quantity=quantity)
        cart_item.save()
        serializer = CartItemSerializer(cart_item)
        total = float(product.price) * float(quantity)
        cart.total = total
        cart.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)