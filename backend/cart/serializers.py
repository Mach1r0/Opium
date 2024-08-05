from rest_framework import serializers
from cart.models import Cart

class CartSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        