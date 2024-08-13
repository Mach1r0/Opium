from django.shortcuts import render
from rest_framework import permissions, viewsets, status
from .models import User, Address
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, AddressSerializer, CreateAddressSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from django.conf import settings
import logging, datetime
import jwt
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import RetrieveAPIView

logger = logging.getLogger(__name__)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )

class Login(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        nickname = serializer.validated_data['nickname']
        password = serializer.validated_data['password']

        user = authenticate(username=nickname, password=password)

        if user is None:
            raise AuthenticationFailed('User not found')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.now(datetime.timezone.utc)
        }

        token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
        
        return Response({
            'token': token,
            'user_id': user.id,
            'nickname': user.nickname
        }, status=status.HTTP_200_OK)
    
class AddressViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = AddressSerializer
    queryset = Address.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = CreateAddressSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, *args, **kwargs):
        address = self.get_object()
        if address.user != request.user:
            return Response("The user is not the owner of this address", status=status.HTTP_403_FORBIDDEN)
        serializer = self.get_serializer(address)
        return Response(serializer.data, status=status.HTTP_200_OK)