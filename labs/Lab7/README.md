# Lab 7

Here is a tutorial on how to use the Powershell module PSWordCloud. This module will take words and create a nice looking word cloud consisting on those words.

---
First, we need Powershell 7 to use this module. Start by going to https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.1 and installing the Powershell 7.1.5 MSI package.

Once installed, start off by installing the PSWordCloud module
```powershell
Install-Module PSWordCloud
```
**Optional but you can always run the update command to make sure you have the latest version.*
```powershell
Update-Module PSWordCloud
```
Now to get started with your word clouds. I've provided a text file in my repository that has some test words you can use to see how the script runs before customizing it yourself.

Go ahead and download my entire repository and extract my lab 7 folder to your desktop. < IT3038c-scripts-main>labs>lab7 >