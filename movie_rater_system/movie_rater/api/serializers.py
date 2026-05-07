from .models import Movie, Rating
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class MovieSerializer(serializers.ModelSerializer):
    user_rating = serializers.SerializerMethodField()

    def get_user_rating(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            user = request.user
            rating = Rating.objects.filter(user=user, movie=obj).first()
            return rating.stars if rating else None
        return None
    
    class Meta:
        model = Movie
        fields = ('id', 'title', 'description', 'year', 'genre', 'director', 'poster_url', 'number_of_ratings', 'avg_rating', 'user_rating')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'stars', 'user', 'movie')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only':True, 'required':True}} 
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user