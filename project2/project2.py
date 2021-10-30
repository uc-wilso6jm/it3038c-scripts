import string
import random

def pwGen():
    pwSize=int(input('How many characters would you like your password to be? ')) # Variable pwSize stores the input as an int for the number of chars wanted for the password
    newPass = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(pwSize)) # Variable newPass then takes the stored input and randomizes a string of uppercase, lowercase, numbers, and special characters for int amount of characters input before
    print('Randomly Generated Password: ' + newPass) # Print new randomized string

pwGen()
