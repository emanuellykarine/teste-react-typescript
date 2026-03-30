from django.shortcuts import render
from rest_framework import viewsets, status
from .models import Movie, Rating
from .serializers import MovieSerializer, RatingSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


# Create your views here.
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    @action(detail=True, methods=['POST']) #detail true informa que a função é a respeito de um objeto específico e vc precisa passar pk 
    def rate_movie(self, request, pk=None):
        if 'star' in request.data:
            response = {'message': 'its working'}
            return Response(response, status=status.HTTP_200_OK)

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer



