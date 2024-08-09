from rest_framework import serializers
from user.models import User, Address

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['nome', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
            validated_data.pop('password')
        return super().update(instance, validated_data)
    
class AddressSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Address
        exclude = ['modified']