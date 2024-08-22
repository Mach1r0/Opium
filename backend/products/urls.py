from django.urls import path, include
from .views import ProductsViewSet, CategoryViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'ctr-product', ProductsViewSet, basename='product')
router.register(r'ctr-category', CategoryViewSet, basename='category')

urlpatterns = [
    path('', include(router.urls)),    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)