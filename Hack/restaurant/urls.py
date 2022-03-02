from os import access
from django.urls import path
from django.contrib import admin
from . import views

app_name = 'restaurant'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.IndexView.as_view(), name='index'),
    path('index2/', views.Index2View.as_view(), name='index2'),
    path('access/',views.AccessView.as_view(), name='access')    
]