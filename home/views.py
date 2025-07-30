from django.shortcuts import render
from .forms import CommentForm
from .models import Comments

# Create your views here.

mappings = {
    'fridge': 0,
    'cs50ai': 1,
    'cs50web': 2,
    'humaned': 3,
    'playerposeclassifier': 4,
    'portfolio': 5,
    'suggestions': 6,
    'xraydetection': 7,
    'diageohack': 8,
    'android': 9,
}

def index(request):
    return render(request, 'home/index.html')

def fridge(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            # Process the form data here
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            # Save the comment or perform any other action
            # For now, we will just render the same page with the form
            Comments.objects.create(email=email, comment=comment, project=mappings['fridge'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['fridge']).order_by('-time')
    return render(request, 'home/fridge.html', {'form': form, 'comments': comments})

def cs50ai(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['cs50ai'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['cs50ai']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/cs50ai.html', context)

def cs50web(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['cs50web'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['cs50web']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/cs50web.html', context)

def humaned(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['humaned'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['humaned']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/humaned.html', context)

def playerposeclassifier(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['playerposeclassifier'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['playerposeclassifier']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/playerposeclassifier.html', context)

def portfolio(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['portfolio'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['portfolio']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/portfolio.html', context)

def suggestions(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['suggestions'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['suggestions']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/suggestions.html', context)

def xraydetection(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['xraydetection'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['xraydetection']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/xraydetection.html', context)

def diageohack(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['diageohack'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['diageohack']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/diageohack.html', context)

def android(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            comment = form.cleaned_data['comment']
            Comments.objects.create(email=email, comment=comment, project=mappings['android'])
    form = CommentForm()
    comments = Comments.objects.filter(project=mappings['android']).order_by('-time')
    context = {'form': form, 'comments': comments}
    return render(request, 'home/android.html', context)