from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    pass

class Comments(models.Model):
    project = models.IntegerField(blank=False, null=False)
    email = models.EmailField(blank=True, null=True)
    comment = models.CharField(blank=False, null=False, max_length=600)
    time = models.DateTimeField(auto_now_add=True)