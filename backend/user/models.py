from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, nickname, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email must be set')
        
        if not nickname:
            raise ValueError('The nickname must be set')
        
        email = self.normalize_email(email)
        user = self.model(email=email, nickname=nickname, **extra_fields)
        user.set_password(password)  # Certifique-se de que a senha está sendo criptografada
        user.save(using=self._db)
        return user 
    
    def create_superuser(self, email, nickname, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, nickname, password, **extra_fields)
    
class User(AbstractUser):
    username = None  
    nome = models.CharField(max_length=100, null=False, blank=False) 
    nickname = models.CharField(unique=True, max_length=100, null=False, blank=False) 
    email = models.EmailField(max_length=40)
    wishlist = models.JSONField(blank=True, null=True)

    USERNAME_FIELD = 'nickname'
    REQUIRED_FIELDS = ['nome', 'email']

    def __str__(self):
        return self.nome