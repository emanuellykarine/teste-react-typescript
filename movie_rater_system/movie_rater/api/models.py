from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=32)
    poster_url = models.URLField(max_length=500, blank=True, null=True, help_text="URL do poster do filme")
    description = models.TextField(max_length=360)
    year = models.IntegerField(validators=[MinValueValidator(1888), MaxValueValidator(2100)], blank=True, null=True, help_text="Ano de lançamento do filme")
    genre = models.CharField(max_length=32, blank=True, null=True, help_text="Gênero do filme")
    director = models.CharField(max_length=32, blank=True, null=True, help_text="Diretor do filme")
    
    def number_of_ratings(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)
    
    def avg_rating(self):
        sum = 0
        ratings = Rating.objects.filter(movie=self)
        for rating in ratings:
            sum += rating.stars

        if ratings.exists():
            return sum / ratings.count()
        else:
            return 0

    def __str__(self):
        return f'{self.title}'
    
class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='ratings')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ratings')
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        unique_together = (('movie', 'user'),)  # Garante que um usuário só possa avaliar um filme uma vez

    