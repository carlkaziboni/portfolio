from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'home/index.html')

def fridge(request):
    return render(request, 'home/fridge.html')

def cs50ai(request):
    return render(request, 'home/cs50ai.html')

def cs50web(request):
    return render(request, 'home/cs50web.html')

def humaned(request):
    return render(request, 'home/humaned.html')

def playerposeclassifier(request):
    return render(request, 'home/playerposeclassifier.html')

def portfolio(request):
    return render(request, 'home/portfolio.html')

def suggestions(request):
    return render(request, 'home/suggestions.html')

def xraydetection(request):
    return render(request, 'home/xraydetection.html')

def diageohack(request):
    return render(request, 'home/diageohack.html')