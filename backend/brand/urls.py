from django.urls import  include, path
from rest_framework.routers import DefaultRouter
from .views import BrandViewSet

router = DefaultRouter()
router.register(r'create', BrandViewSet, basename='create')

urlpatterns = [
    path('', include(router.urls)),
]
