from rest_framework import serializers
from .models import Product, Category
from user.models import User
from brand.models import Brand

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'icon']

class ProductsSerializer(serializers.ModelSerializer):
    seller = serializers.SlugRelatedField(slug_field="username", queryset=User.objects)
    brand = serializers.PrimaryKeyRelatedField(queryset=Brand.objects.all())

    def get_category(self, obj):
        return obj.category.name

    class Meta:
        model = Product
        fields = ['id', 'status', 'seller', 'type', 'name', 'quantity', 'size', 'image', 'brand', 'price', 'description', 'category']