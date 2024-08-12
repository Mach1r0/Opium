from django.urls import path, include
from  .views import ProductsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'create', ProductsViewSet, basename='create')


urlpatterns = [
    path('', include(router.urls)),    
] 
