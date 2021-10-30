import string
import random
pwSize = 0

pwSize=int(input('How many characters would you like your password to be? '))

def pwGen():
    newPass = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(pwSize)) # Variable newPass then takes the stored input and randomizes a string of uppercase, lowercase, numbers, and special characters for int amount of characters input before
    genPW = ('Randomly Generated Password: ' + newPass) # Print new randomized string
    return genPW

while pwSize < 8:
    print('Not enough characters for a strong password. Please enter at least 8 characters.')
    pwSize=int(input('How many characters would you like your password to be? '))
else:
    print(pwGen())


    
    

        
    
