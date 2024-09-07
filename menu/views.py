from django.shortcuts import render
from .models import Cake

# Create your views here.


def menu(request):
    query_cakes = Cake.objects.all()  # Consulta para pegar todos os bolos
    return render(request, "main_menu.html", {"query_cakes": query_cakes})
