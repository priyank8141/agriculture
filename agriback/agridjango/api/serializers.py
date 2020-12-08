from rest_framework import serializers
from .models import Signup


class SignupSerializers(serializers.Serializer): #creating serializer for parsing data
    name = serializers.CharField(max_length=100)
    email = serializers.CharField(max_length=100)
    gender = serializers.CharField(max_length=10)
    password = serializers.CharField(max_length=100)

    def create(self,validated_data):
        return Signup.objects.create(**validated_data)
