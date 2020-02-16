from django.shortcuts import render
import requests

access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpQG5vY3RvaWQuY29tIiwiZXhwIjoxNTgyNDA4OTA4NzAwLCJwbGF0Zm9ybSI6ImVtYWlsIiwiaWQiOjE4NTB9.r9Cy3RKI_sX9Hy_m-ahZHGFhbXHV4CyxMEylIMCmL80"


# Create your views here.
def project_detail(request):
    if request.method == "GET":
        if "id" in request.GET:
            raw_data = requests.get("https://api.smartsignature.io/token/" + str(
                request.GET["id"]) + "/balances?pagesize=200&sort=amount-desc&page=1",
                                    headers={"x-access-token": access_token}).json().get("data").get("list")
            all_tokens = requests.get("https://api.smartsignature.io/token/all?pagesize=100",
                                      headers={"x-access-token": access_token}).json().get("data").get("list")
            project = None
            for token in all_tokens:
                # print(token)
                if token["id"] == eval(request.GET["id"]):
                    project = token

            # print(project)
    return render(
        request, "project_detail.html",
        {"q": raw_data, "members": raw_data[:8], "proj_info": project}
    )


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
