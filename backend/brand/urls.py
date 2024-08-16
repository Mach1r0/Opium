from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import BrandViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'create', BrandViewSet, basename='create')

urlpatterns = [
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)