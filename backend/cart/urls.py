from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CartViewSet, CartItemListCreateAPIView, CartItemRetrieveUpdateDestroyAPIView

router = DefaultRouter()
router.register(r'cart-create', CartViewSet, basename='cart-create')

urlpatterns = [
    path('', include(router.urls)),
    path('cart-items/', CartItemListCreateAPIView.as_view(), name='cart-item-list-create'),
    path('cart-items/<int:pk>/', CartItemRetrieveUpdateDestroyAPIView.as_view(), name='cart-item-retrieve-update-destroy'),
]