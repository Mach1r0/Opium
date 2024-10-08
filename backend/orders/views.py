from django.shortcuts import render
from rest_framework import permissions, viewsets
from orders.models import Order
from orders.serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    