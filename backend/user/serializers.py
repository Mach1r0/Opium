from rest_framework import serializers
from .models import User, Address
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

User = get_user_model()

class LoginSerializer(serializers.Serializer):
    nickname = serializers.CharField(required=True, write_only=True)
    password = serializers.CharField(required=True, write_only=True)
    
    def validate(self, data):
        nickname = data.get('nickname')
        password = data.get('password')
        
        if not nickname or not password:
            raise serializers.ValidationError("Nickname and password are required")
        
        if not User.objects.filter(nickname=nickname).exists():
            raise serializers.ValidationError("Nickname is not valid")
        
        user = User.objects.filter(nickname=nickname).first()
        if user and not user.check_password(password):
            raise serializers.ValidationError("Password is not valid")
        
        return data
    
    def save(self, **kwargs):
        nickname = self.validated_data['nickname']
        user = User.objects.get(nickname=nickname)
        token, created = Token.objects.get_or_create(user=user)
        return {
            'token': token.key,
            'user_id': user.pk,
            'nickname': user.nickname
        }

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    nickname = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    
    class Meta:
        model = User 
        fields = ["email", "nickname", "password", "first_name", "last_name", "phone", "nome"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def validate(self, attrs):
        if User.objects.filter(email=attrs["email"]).exists():
            raise serializers.ValidationError({"email": "Email is already in use"})
        
        if User.objects.filter(nickname=attrs['nickname']).exists():
            raise serializers.ValidationError({'nickname': "Nickname is already in use"})
        
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            nome = validated_data['nome'],
            nickname=validated_data['nickname'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        
        user.set_password(validated_data['password'])
        user.save()

        return user
    
    
class UserSerializer(serializers.ModelSerializer):
    gender = serializers.SerializerMethodField()
    slug = serializers.SlugField(read_only=True)

    def get_gender(self, obj):
        return obj.get_gender_display()

    class Meta:
        model = User
        fields = [
            "id",
            "nickname",
            'nome',
            "email",
            "phone",
            "picture",
            "gender",
            "about",
            "slug",
        ]
    
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        exclude = ["modified"]

class CreateAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"