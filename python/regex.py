import requests, re

data = "Hello, my email is wilso6jm@mail.uc.edu. Please contact me!"
email = re.compile('[A-z0-9_\.-]+@+[A-z0-9_\.-]+')