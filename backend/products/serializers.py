from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['description', 'name', 'icon']  

class ProductsSerializer(serializers.HyperlinkedModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', queryset=Category.objects.all())
    
    class Meta:
        model = Product
        exclude = ['modified']
