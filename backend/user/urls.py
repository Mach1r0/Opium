from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, RegisterView, Login, AddressViewSet

router = DefaultRouter()
router.register(r'create', UserViewSet, basename='create')
router.register(r'address', AddressViewSet, basename='address')

app_name = 'user'

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'), 
    path('login/', Login.as_view(), name='login'),
]