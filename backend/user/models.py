from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.text import slugify
from core.models import TimeStampedModel
from rest_framework import serializers

class UserManager(BaseUserManager):
    def create_user(self, nome, email, nickname, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(nome=nome, email=email, nickname=nickname, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, nome, email, nickname, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(nome, email, nickname, password, **extra_fields)


class User(AbstractUser):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )

    username = None 
    about = models.TextField(("about"), max_length=500, blank=True, null=True)
    nome = models.CharField(max_length=100, null=False, blank=False) 
    nickname = models.CharField(unique=True, max_length=100, null=False, blank=False) 
    email = models.EmailField(max_length=40, unique=True, blank=False, null=False)
    phone = models.CharField(max_length=50, null=True, blank=True)
    picture = models.ImageField(upload_to='users-img', null=True, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True, null=True)

    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome', 'nickname']

    objects = UserManager()

    def __str__(self):
        return self.nome
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nickname)
        super().save(*args, **kwargs)
        
class Address(TimeStampedModel):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    address = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    cep = models.IntegerField()

    def __str__(self):
        return self.user.nome