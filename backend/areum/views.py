from django.shortcuts import render
from rest_framework import generics

from .models import Edu
from .serializers import ClassSerializer


class ListClass(generics.ListCreateAPIView):
    queryset = Edu.objects.all()
    serializer_class = ClassSerializer


class DetailClass(generics.RetrieveUpdateDestroyAPIView):
    queryset = Edu.objects.all()
    serializer_class = ClassSerializer
