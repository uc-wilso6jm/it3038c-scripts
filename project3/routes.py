from flask import Flask, render_template, request
import string
import random
numChars = 0

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def hello():
    return render_template("index.html")

@app.route('/pwgen', methods=['POST'])
def pwGen():
    numChars = request.form['pwSize']
    return render_template("pwgen.html", pwSize = numChars)

@app.route('/genPW', methods=['POST'])
def genPW():
    passwd = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(numChars))
    return render_template("genPW.html", numChars = passwd)
