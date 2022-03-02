from django.shortcuts import render
from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'index.html'

class Index2View(TemplateView):
    template_name = 'index2.html'

class AccessView(TemplateView):
    template_name = 'access.html'