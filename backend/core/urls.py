from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TravellersViewSet,EventViewSet,PostViewSet

router = DefaultRouter()
router.register(r'travellers', TravellersViewSet)
router.register(r'events',EventViewSet)
router.register(r'posts',PostViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
