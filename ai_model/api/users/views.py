from django.shortcuts import render  # Make sure render is imported

def home(request):
    return render(request, "home.html")  # Template for the homepage

def disaster_data(request):
    context = {
        "disasters": [
            {"name": "Earthquake", "location": "California", "date": "2024-10-21"},
            {"name": "Flood", "location": "Bangladesh", "date": "2024-09-15"},
        ]
    }
    return render(request, "disaster_data.html", context)
