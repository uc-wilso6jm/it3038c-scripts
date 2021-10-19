import requests, re
from bs4 import BeautifulSoup

r = requests.get('https://analytics.usa.gov').content