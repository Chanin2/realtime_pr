import re
from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm


# Create your views here.
def index(request):
    return render(request, 'index.html', context={'text':20,})

def dashboard(request):
    return render(request, 'dashboard.html', context={'text':'Hello world'})

def about(request):
    return render(request, 'about.html', context={'text':'Hello world'})

def login(request):
    form = AuthenticationForm()
    return render(request,'login.html',{
        'form':form,
    })
