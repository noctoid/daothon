from django.shortcuts import render
import requests


# 赞助商信息 sponsors judgers 读取 assets speakers.csv judgers.csv
# import json
import csv
import os

judgers = []
sponsors = []


module_path = os.path.dirname(__file__) 

with open(module_path + "/assets/judgers.csv") as f:
    reader = csv.reader(f)
    header = []
    for row in reader:
        value = {}
        if header == []:
            header = row
        else:
            for index in range(len(header)):
                value[header[index]] = row[index]
            sponsors.append(value)

with open(module_path + "/assets/sponsors.csv") as f:
    reader = csv.reader(f)
    header = []
    for row in reader:
        value = {}
        if header == []:
            header = row
        else:
            for index in range(len(header)):
                value[header[index]] = row[index]
            judgers.append(value)

# # print(json.dumps(collection, indent=2))
# with open ("/Users/mac/Documents/GitHub/daothon/daothon_server/project_detail/assets/speakers.json", "w") as f:
#     json.dump(collection, f, indent=2)

# ---------

access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpQG5vY3RvaWQuY29tIiwiZXhwIjoxNTgyNDA4OTA4NzAwLCJwbGF0Zm9ybSI6ImVtYWlsIiwiaWQiOjE4NTB9.r9Cy3RKI_sX9Hy_m-ahZHGFhbXHV4CyxMEylIMCmL80"

# Create your views here
def all_projects(request):
    raw_response = requests.get("https://api.smartsignature.io/token/all", headers={"x-access-token": access_token},
                                params={"pagesize": 100, "sort": "general", "page": 1}).json().get("data").get("list")
    return render(
        request, "tileview.html", 
        {"username": "Alice Volfield", "entries": [i for i in raw_response], "sponsors": sponsors, "judgers": judgers}
    )


def all_people(request):
    return render(
        request, "tileview.html",
        {"username": "Alice Volfield", "entries": ["People"+str(i) for i in range(100)],}
    )