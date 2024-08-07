from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = None  # Remover o campo username
    nome = models.CharField(max_length=100, null=False, blank=False) 
    nickname = models.CharField(unique=True, max_length=100, null=False, blank=False) 
    email = models.EmailField(max_length=40)
    password = models.CharField(max_length=100, null=False, blank=False)
    wishlist = models.JSONField(blank=True, null=True)

    USERNAME_FIELD = 'nickname'
    REQUIRED_FIELDS = ['nome', 'email']

    def __str__(self):
        return self.nome