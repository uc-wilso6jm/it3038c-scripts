from flask import Flask, render_template, request
import string
import random

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def hello():
    return render_template("index.html")

@app.route('/genPW', methods=['POST'])
def genPW():
    numChars = int(request.form['pwSize'])
    passwd = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(numChars))
    return render_template("genPW.html", passwd = passwd)