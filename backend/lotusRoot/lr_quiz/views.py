from rest_framework import viewsets
from .models import SurveyQuestion, SurveyResponse
from .serializers import SurveyQuestionSerializer, SurveyResponseSerializer

class SurveyQuestionViewSet(viewsets.ModelViewSet):
    queryset = SurveyQuestion.objects.all()
    serializer_class = SurveyQuestionSerializer

class SurveyResponseViewSet(viewsets.ModelViewSet):
    queryset = SurveyResponse.objects.all()
    serializer_class = SurveyResponseSerializer
