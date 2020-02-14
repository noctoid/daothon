from django.shortcuts import render

# Create your views here.
def all_projects(request):
    return render(request, "base.html", {})