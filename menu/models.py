from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Cake(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Adicione max_digits
    image = models.ImageField(upload_to='cakes/', blank=True, null=True)  # Campo para a imagem
    falovor = models.TextField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Adicione on_delete
    cakes = models.ManyToManyField(Cake)  # Use ManyToManyField para armazenar múltiplos produtos

    def __str__(self):
        return f"Order #{self.id} by {self.user.username}"
