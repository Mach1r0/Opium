from rest_framework import permissions, viewsets
from products.models import Product, Category
from products.serializers import ProductsSerializer, CategorySerializer

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer