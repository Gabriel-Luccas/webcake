from django.urls import path, include
from .views import *

#menu urls
urlpatterns = [
    path("", menu , name='menu') 
    
    ]