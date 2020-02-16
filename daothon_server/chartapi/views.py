# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

import requests
import json

access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpQG5vY3RvaWQuY29tIiwiZXhwIjoxNTgyNDA4OTA4NzAwLCJwbGF0Zm9ybSI6ImVtYWlsIiwiaWQiOjE4NTB9.r9Cy3RKI_sX9Hy_m-ahZHGFhbXHV4CyxMEylIMCmL80"


# Create your views here.
def get_token_list(request):
    raw_response = requests.get("https://api.smartsignature.io/token/all", headers={"x-access-token": access_token}, params={"pagesize": 100, "sort":"general", "page":1}).json()
    _ = raw_response.get("data").get("list")
    token_list = [
        {"id":i["id"], "name":i["name"], "total_supply": i["total_supply"], "logo": i["logo"]} for i in _
    ]
    return JsonResponse({"list": token_list})

def get_token_pie_chart_data(request):
    if request.
    return JsonResponse({})
