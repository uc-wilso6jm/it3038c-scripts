import requests, re
from bs4 import BeautifulSoup

r = requests.get('https://www.microcenter.com/product/630283/amd-ryzen-9-5900x-vermeer-37ghz-12-core-am4-boxed-processor-heatsink-not-included').content
soup = BeautifulSoup(r,"html.parser")
details = soup.find("h1")
thisspan = ""
for d in details:
    title = d.find("span")
    if title is not None and title != -1:
        thisspan = title
print("Product: %s %s | Price: $%s" % (thisspan.get('data-brand'), thisspan.get('data-name'), thisspan.get('data-price')))