from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cart.views import CartViewSet
from brand.views import BrandViewSet
from user.views import UserViewSet
from orders.views import OrderViewSet
from products.views import ProductsViewSet
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'brand', BrandViewSet, basename='brand')
router.register(r'user', UserViewSet, basename='user')
router.register(r'orders', OrderViewSet, basename='orders')
router.register(r'products', ProductsViewSet, basename='products')
router.register(r'cart', CartViewSet, basename='cart')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('orders/', include('orders.urls')), 
    path('products/', include('products.urls')), 
    path('cart/', include('cart.urls')),
    path("brand/", include('brand.urls')),
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
