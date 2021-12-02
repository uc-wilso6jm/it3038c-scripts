# Project 3 - Password Generator (Final Update)

### This project incorporates my previous project script of generating a random password into a website for an easier user experience.

### The changes I have made are that I am now running a web server using flask and I encorporated my previous script into the webpage's code. When you use the form box to enter how many characters long you would like your password to be, that variable gets stored and the password is generated based on the number chosen. This replaces the user input prompt from my previous projects. 

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
### 2. Once the ZIP folder is downloaded, navigate through the directories until you get to my project3 folder (it3038c-scripts-main > project3) and extract the entire project3 folder to your desktop.
### 3. Next, you'll need to open Powershell and install flask for the web server to run.
```powershell
pip install flask
```
### 3. In Powershell, cd to your Desktop directory
```powershell
cd C:\Users\<Name>\Desktop
```
### 4. Now that you are in the correct directory that the project3 folder is located, you can just run the web server by typing
```powershell
python web.py
```
### 5. In a web browser, naviagte to localhost:5000 and you should be greeted with the home page of the web server.
![Imgur](https://imgur.com/a/02CLLox.jpg)


---

### Feel free to use this script to generate a complex, secure password for any of your accounts! I would recommend using a password manager such as [Dashlane](https://www.dashlane.com/) or [LastPass](https://www.lastpass.com/) because it would be very difficult and annoying to try and memorize a 20 character password for your email when you need to log in and check it everyday.


### Sources used for reference in creating my project:
- [Stack Overflow - Defining Randomized Characters Function](https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits)
- [Real Python - ASCII String Module Library](https://realpython.com/python-encodings-guide/)
- [Markdown Cheatsheet (README.md file)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [While loops](https://www.w3schools.com/python/python_while_loops.asp)
- [HTML Form](https://stackoverflow.com/questions/27385005/display-user-input-for-form)
- [HTML Input](https://www.w3schools.com/tags/att_input_type_number.asp)
- [Flask Documentation](https://flask.palletsprojects.com/en/2.0.x/quickstart/#)