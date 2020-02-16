# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

import requests
import json

access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpQG5vY3RvaWQuY29tIiwiZXhwIjoxNTgyNDA4OTA4NzAwLCJwbGF0Zm9ybSI6ImVtYWlsIiwiaWQiOjE4NTB9.r9Cy3RKI_sX9Hy_m-ahZHGFhbXHV4CyxMEylIMCmL80"


# Create your views here.
def get_token_list(request):
    raw_response = requests.get("https://api.smartsignature.io/token/all", headers={"x-access-token": access_token},
                                params={"pagesize": 100, "sort": "general", "page": 1}).json()
    _ = raw_response.get("data").get("list")
    token_list = [
        {"id": i["id"], "name": i["name"], "total_supply": i["total_supply"], "logo": i["logo"]} for i in _
    ]
    return JsonResponse({"list": token_list})


def get_token_pie_chart_data(request):
    sample = {"id": 506, "uid": 1072, "token_id": 22, "amount": 70500823, "total_supply": 226000000,
              "username": "exchange_DAO", "nickname": "null", "avatar": "/avatar/exchange.png"}
    if request.method == "GET":
        if "id" in request.GET:
            raw_data = requests.get("https://api.smartsignature.io/token/" + str(
                request.GET["id"]) + "/balances?pagesize=200&sort=amount-desc&page=1",
                                    headers={"x-access-token": access_token}).json()
            token_detail = raw_data.get("data").get("list")
            token_detail = [
                {
                    "name": _.get("username", "null"),
                    "nickname": _.get("nickname", "null"),
                    "avatar": _.get("avatar", ""),
                    "value": round(_["amount"] / _["total_supply"] * 100, 2)
                } for _ in token_detail
            ]
            current_percentage = 0
            number_of_results = 0
            purged_token_detail = []
            for d in token_detail:
                if d.get("value") >= 1 or number_of_results < 20:
                    current_percentage += d.get("value")
                    purged_token_detail.append(d)
                    number_of_results += 1
                    # print(d["username"], "->", d["percent"])
                else:
                    break
            else_percentage = round(100 - current_percentage, 2)
            purged_token_detail += [{"name": "else", "nickname": "else", "avatar": "", "value": else_percentage}]

    # return JsonResponse({"token_detail": token_detail, "else_percent": else_percentage})

    return JsonResponse({"token_detail": purged_token_detail})
