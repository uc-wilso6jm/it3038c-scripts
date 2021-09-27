import string
import random

#chars=string.ascii_uppercase + string.ascii_lowercase + string.digits

def pwGen(pwSize=str(input('How many characters would you like your password to be? '))):
    return ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(pwSize))

print(pwGen)
