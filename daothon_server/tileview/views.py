from django.shortcuts import render
import requests

access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpQG5vY3RvaWQuY29tIiwiZXhwIjoxNTgyNDA4OTA4NzAwLCJwbGF0Zm9ybSI6ImVtYWlsIiwiaWQiOjE4NTB9.r9Cy3RKI_sX9Hy_m-ahZHGFhbXHV4CyxMEylIMCmL80"

# Create your views here
def all_projects(request):
    raw_response = requests.get("https://api.smartsignature.io/token/all", headers={"x-access-token": access_token},
                                params={"pagesize": 100, "sort": "general", "page": 1}).json().get("data").get("list")
    return render(
        request, "tileview.html", 
        {"username": "Alice Volfield", "entries": [i for i in raw_response]}
    )


def all_people(request):
    return render(
        request, "tileview.html",
        {"username": "Alice Volfield", "entries": ["People"+str(i) for i in range(100)]}
    )