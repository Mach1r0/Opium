from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, nome, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email must be set')
        
        if not username:
            raise ValueError('The username must be set')
        
        user = self.model(
            email = self.normalize_email(email),
            nome = nome, 
            username = username,
            )
        user.set_password(password)  
        user.save(using=self._db)
        
        return user 
    
    def create_superuser(self, nome, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(nome, email, username, password, **extra_fields)
    
class User(AbstractUser):
    nome = models.CharField(max_length=100, null=False, blank=False) 
    username = models.CharField(unique=True, max_length=100, null=False, blank=False) 
    email = models.EmailField(max_length=40, unique=True, blank=False, null=False)
    phone = models.CharField(max_length=50, null=True)

    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome', 'username']

    def __str__(self):
        return self.nome
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    adress = models.CharField(max_length=100, null=True, blank=True)
    picture = models.ImageField(upload_to='users-img', null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.user.nome