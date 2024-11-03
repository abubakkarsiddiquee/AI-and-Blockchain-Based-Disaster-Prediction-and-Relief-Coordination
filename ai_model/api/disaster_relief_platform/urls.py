from django.contrib import admin
from django.urls import path, include
from users import views  # Import the view from the users app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),  # Existing users URL pattern
    path('', views.home, name='home'),  # New root URL pattern
    path("disaster-data/", views.disaster_data, name="disaster_data"),
]
