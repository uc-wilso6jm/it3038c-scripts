import requests
import json

r = requests.get('http://localhost:3000')
data = r.json()

for i in data:
    print(i['name'] + ' is ' + i['color'])