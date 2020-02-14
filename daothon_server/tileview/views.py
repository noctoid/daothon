from django.shortcuts import render

# Create your views here.
def all_projects(request):
    return render(
        request, "tileview.html", 
        {"username": "Alice Volfield", "entries": [i for i in range(100)]}
    )


def all_people(request):
    return render(
        request, "tileview.html",
        {"username": "Alice Volfield", "entries": ["People"+str(i) for i in range(100)]}
    )