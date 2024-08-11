from rest_framework import serializers
from cart.models import Cart, CartItem
from products.serializers import ProductsSerializer  
from products.models import Product

class CartProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "title",
            "seller",
            "quantity",
            "price",
            "image",
        )

class CartSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cart
        fields =[ 'user', 'total']

class CartItemSerializer(serializers.ModelSerializer):

    class Meta: 
        model = CartItem 
        fields = ['cart', 'quantity']