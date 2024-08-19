from rest_framework import serializers
from .models import Product, Category
from user.models import User
from brand.models import Brand

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'icon']

class ProductsSerializer(serializers.ModelSerializer):
    seller = serializers.SlugRelatedField(slug_field="email", queryset=User.objects.all())
    brand = serializers.PrimaryKeyRelatedField(queryset=Brand.objects.all())

    def get_category(self, obj):
        return obj.category.name

    class Meta:
        model = Product
        fields = ['status', 'seller', 'name', 'quantity', 'size', 'image', 'brand', 'price', 'description', 'category', 'sport']