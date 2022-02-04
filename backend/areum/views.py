from rest_framework import generics
from rest_framework.response import Response

from .models import Edu
from .serializers import ClassSerializer
from django.http import HttpResponse, JsonResponse
from . import serializers


class ListClass(generics.ListCreateAPIView):
    queryset = Edu.objects.all()
    serializer_class = ClassSerializer


class DetailClass(generics.ListAPIView):
    queryset = Edu.objects.all()
    serializer = ClassSerializer

    def get(self, request, pk):
        # cat=self.kwargs['category']
        queryset = Edu.objects.filter(category=pk)
        serializer = serializers.ClassSerializer(queryset, many=True)
        return Response(serializer.data)
