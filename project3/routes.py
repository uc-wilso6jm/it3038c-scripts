from flask import Flask, render_template, request
import string
import random

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/') #route for index home page
def hello():
    return render_template("index.html")

@app.route('/genPW', methods=['POST']) #route for generated password page after submitting the form
def genPW():
    numChars = int(request.form['pwSize'])
    passwd = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(numChars)) #randomizes a string of numbers, letters, and special characters for the amount of characters in pwSize
    return render_template("genPW.html", passwd = passwd)