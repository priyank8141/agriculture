from django.db import models

# Create your models here.
class Signup(models.Model): #creating model to create database in api
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    password = models.CharField(max_length=100)
        