from unicodedata import category
from django.db import models
from datetime import datetime


class Edu(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(null=True)
    image = models.TextField(null=True)
    date = models.DateTimeField(default=datetime.now())
    video = models.TextField(null=True)
    category = models.IntegerField(default=4) #음악 1, 요리 2, 운동 3, 생활 4

    def __str__(self):
        """A string representation of the model."""
        return self.title
