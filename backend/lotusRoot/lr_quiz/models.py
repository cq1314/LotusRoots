from django.db import models

class SurveyQuestion(models.Model):
    question_text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question_text

class SurveyResponse(models.Model):
    question = models.ForeignKey(SurveyQuestion, on_delete=models.CASCADE)
    response_text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.response_text
