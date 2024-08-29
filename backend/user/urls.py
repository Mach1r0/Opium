from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, RegisterView, Login, AddressViewSet, UpdateUserView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'create', UserViewSet, basename='create')
router.register(r'address', AddressViewSet, basename='address')

app_name = 'user'

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'), 
    path('login/', Login.as_view(), name='login'),
    path('update/', UpdateUserView.as_view(), name='update'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)