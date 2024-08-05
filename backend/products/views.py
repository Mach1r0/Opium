from django.shortcuts import render
from rest_framework import permissions, viewsets
from products.models import Product
from products.serializers import ProductsSerializer

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
    