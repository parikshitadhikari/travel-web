from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TravellersViewSet

router = DefaultRouter()
router.register(r'travellers', TravellersViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
