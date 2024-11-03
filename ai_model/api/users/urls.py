# users/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("disaster-data/", views.disaster_data, name="disaster_data"),
]
