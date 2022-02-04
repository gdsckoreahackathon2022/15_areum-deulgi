from rest_framework import serializers
from .models import Edu


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Edu
