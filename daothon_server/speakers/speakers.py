# import json
import csv
import os
from django.shortcuts import render

collection = []

module_path = os.path.dirname(__file__) 

with open(module_path + "/assets/speakers.csv") as f:
    reader = csv.reader(f)
    header = []
    for row in reader:
        value = {}
        if header == []:
            header = row
        else:
            for index in range(len(header)):
                value[header[index]] = row[index]
            collection.append(value)

# Create your views here
def all_speakers(request):
    return render(
        request, "speakers.html", 
        {"speakers": collection}
    )

# # print(json.dumps(collection, indent=2))
# with open ("/Users/mac/Documents/GitHub/daothon/daothon_server/project_detail/assets/speakers.json", "w") as f:
#     json.dump(collection, f, indent=2)
