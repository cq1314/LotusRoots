from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SurveyQuestionViewSet, SurveyResponseViewSet

router = DefaultRouter()
router.register(r'questions', SurveyQuestionViewSet)
router.register(r'responses', SurveyResponseViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
