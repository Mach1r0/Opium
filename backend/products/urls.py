from django.urls import path, include
from .views import ProductsViewSet, CategoryViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'ctr-product', ProductsViewSet, basename='product')
router.register(r'ctr-category', CategoryViewSet, basename='category')

urlpatterns = [
    path('', include(router.urls)),    
]