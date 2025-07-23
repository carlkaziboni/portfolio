from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name='home_index'),
    path("fridge/", views.fridge, name='home_fridge'),
    path("cs50ai/", views.cs50ai, name='home_cs50ai'),
    path("cs50web/", views.cs50web, name='home_cs50web'),
    path("humaned/", views.humaned, name='home_humaned'),
    path("playerposeclassifier/", views.playerposeclassifier, name='home_playerposeclassifier'),
    path("portfolio/", views.portfolio, name='home_portfolio'),
    path("suggestions/", views.suggestions, name='home_suggestions'),
    path("xraydetection/", views.xraydetection, name='home_xraydetection'),
    path("diageohack/", views.diageohack, name='home_diageohack'),
]