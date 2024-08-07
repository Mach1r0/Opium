from django.shortcuts import render
from rest_framework import permissions, viewsets
from user.models import User
from user.serializers import UserSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
import logging, jwt, datetime
from rest_framework.response import Response
from django.conf import settings

logger = logging.getLogger(__name__)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class Register(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class Login(APIView):
    def post(self, request):
        nickname = request.data.get('nickname')
        password = request.data.get('password')

        if not nickname or not password:
            logger.error('Nickname and password are required.')
            raise AuthenticationFailed('Nickname and password are required.')

        logger.info(f'Attempting to authenticate user with nickname: {nickname}')
        user = authenticate(request, nickname=nickname, password=password)

        if user is None:
            logger.error(f'Invalid crendentials for nickname:' {nickname})
            raise AuthenticationFailed('Invalid credentials')
        
        payload = {
            'id': user.id, 
            'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(day=1),
            'iat': datetime.datetime.now(datetime.timezone.utc)
        }
        token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
