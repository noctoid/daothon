"""daothon_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from tileview.views import all_projects, all_people
from project_detail.views import project_detail, people_detail, sample_project, sample_people
from chartapi.views import get_token_list, get_token_pie_chart_data

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', all_projects),
    path('people/', all_people),
    path('people/detail/', people_detail),
    path('people/sample/', sample_people),
    path('projects/sample/', sample_project),
    path('projects/detail/', project_detail),
    path('token_list/', get_token_list),
    path('show_token/', get_token_pie_chart_data),
]
