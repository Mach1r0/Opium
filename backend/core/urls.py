from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cart.views import CartViewSet
from brand.views import BrandViewSet
from user.views import UserViewSet
from orders.views import OrderViewSet
from products.views import ProductsViewSet

router = routers.DefaultRouter()
router.register(r'brand', BrandViewSet, basename='brand')
router.register(r'cart', CartViewSet, basename='cart')
router.register(r'user', UserViewSet, basename='user')
router.register(r'orders', OrderViewSet, basename='orders')
router.register(r'products', ProductsViewSet, basename='products')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('', include(router.urls)),
]