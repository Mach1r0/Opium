from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CartViewSet, CartItemViewSet

router = DefaultRouter()
router.register(r'create', CartViewSet, basename='cart')
router.register(r'cart-item', CartItemViewSet, basename='cart-items')

urlpatterns = [
    path('', include(router.urls)),
]