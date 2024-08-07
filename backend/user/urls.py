from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, Register

router = DefaultRouter()
router.register(r'create', UserViewSet, basename='create')

app_name = 'user'

urlpatterns = [
    path('', include(router.urls)),
    path('register/', Register.as_view(), name='register'), 
]
