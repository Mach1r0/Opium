from django.urls import path, include
from  .views import ProductsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'ctr-product', ProductsViewSet, basename='ctr-product')


urlpatterns = [
    path('', include(router.urls)),    
] 
