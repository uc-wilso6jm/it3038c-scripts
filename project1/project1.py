import string
import random

def pwGen():
    pwSize=int(input('How many characters would you like your password to be? '))
    newPass = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(pwSize))
    print(newPass)

pwGen()
