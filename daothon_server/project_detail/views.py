from django.shortcuts import render

# Create your views here.
def project_detail(request, project_name):
    pass


def sample_project(request):
    return render(
        request, "project_detail.html",
        {}
    )

def sample_people(request):
    return render(
        request, "people_detail.html",
        {}
    )