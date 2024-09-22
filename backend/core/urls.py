from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TravellersViewSet,EventViewSet

router = DefaultRouter()
router.register(r'travellers', TravellersViewSet)
router.register(r'events',EventViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
