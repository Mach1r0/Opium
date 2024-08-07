# user/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    nome = models.CharField(max_length=100, null=False, blank=False) 
    nickname = models.CharField(unique=True, max_length=100, null=False, blank=False) 
    email = models.EmailField(max_length=40)
    wishlist = models.JSONField()

    USERNAME_FIELD = 'nickname'
    REQUIRED_FIELDS = ['nome', 'email']

    def __str__(self):
        return self.nome
