# Project 2 - Password Generator (Updated)

### This script is a simple but potentially very secure password generator. It asks the user to input a chosen number of charcters they want their password to be and generates a random string of uppercase, lowercase, numbers, and special characters for the number of characters the user specified.

### The changes I have made since Project 1 are that it now contains a loop that runs when you enter a integer length that is not long enough to generate a secure password. Generally, most sites nowadays will not allow passwords to be less than 8 characters. I have written a loop that if a value of less than 8 is input, the user gets a message saying it needs to be at least 8 characters. If the user does input an integer of at least 8, a randomly generated password will be created.

# Setup

### *Python must already be installed on your machine for this script to work. If you do not already have python installed, go to https://www.python.org/downloads/ and download the latest version for your OS. Make sure you check the "Add to PATH" checkbox during installation.*

### *To check if you already have a version of python installed on your machine, open a powershell window and run this command*
```powershell
python --version
```
### *If you already have python installed but the path isn't selected (i.e. the previous command tells you there isn't a version of python installed on your machine even after you've installed it) then navigate to the location of your python.exe file on your hard drive and copy its location path. Go to your powershell window and use this command*
```powershell
set-alias python <paste full python.exe location path here> 
```
### *Running the python --verison command should work now, verifying that you have it installed and it is working correctly.*

---

### 1. To run the script, start by going to my [repository homepage](https://github.com/uc-wilso6jm/it3038c-scripts) and downloading the ZIP folder.
### 2. Once the ZIP folder is downloaded, navigate through the directories until you get to my project2.py file (it3038c-scripts-main > project2 > project2.py) and extract the .py file to your desktop.
### 3. Open Powershell and cd to your Desktop directory
```powershell
cd C:\Users\<Name>\Desktop
```
### 4. Now that you are in the correct directory that the .py file is located, you can just call the script to run by typing
```powershell
python project2.py
```

### 5. Your final output should look like this if you enter a value of at least 8
```powershell
C:\Users\Jarod\Desktop> python project2.py
How many characters would you like your password to be? 18
Randomly Generated Password: vpdGi`Xj2LK1n'4487
```

### If you do not enter a value of at least 8, you get re-prompted to enter a new value
```powershell
C:\Users\Jarod\Desktop> python project2.py
How many characters would you like your password to be? 4
Not enough characters for a strong password. Please enter a value for at least 8 characters.
How many characters would you like your password to be? 
```

---

### Feel free to use this script to generate a complex, secure password for any of your accounts! I would recommend using a password manager such as [Dashlane](https://www.dashlane.com/) or [LastPass](https://www.lastpass.com/) because it would be very difficult and annoying to try and memorize say a 20 character password for your email when you need to log in and check it everyday.


### Sources used for reference in creating my project:
- [Stack Overflow - Defining Randomized Characters Function](https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits)
- [Real Python - ASCII String Module Library](https://realpython.com/python-encodings-guide/)
- [Markdown Cheatsheet (README.md file)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)