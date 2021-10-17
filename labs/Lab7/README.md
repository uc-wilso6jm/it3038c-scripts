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

Open Powershell ISE and create a new .ps1 file. We first want to start by importing the module we just installed.
```powershell
Import-Module PSWordCloud
```
Now we will want to define our words that will be used and define any parameters for the word cloud.

**Note: The more words you use the longer it will take to process and create the word cloud.*

```powershell
Import-Module PSWordCloud

New-WordCloud -Path .\wordcloud.svg -Typeface Consolas -WordSizes @{
    cyber = Get-Random -Maximum 10 -Minimum 1 
    networking = Get-Random -Maximum 15 -Minimum 1 
    programming = Get-Random -Maximum 18 -Minimum 1 
    code = Get-Random -Maximum 20 -Minimum 1 
    database = Get-Random -Maximum 8 -Minimum 1 
    cloud = Get-Random -Maximum 12 -Minimum 1 
}
```
**Note: The path being defined as ".\wordcloud.svg" will save the file to whatever your current working directory is. I recommend changing to your desktop directory to make it easy to find*.
Save your file to your desktop and in Powershell 7 cd into your desktop directory.

Run the script by running
```powershell
.\<script-name.ps1>
```
Find your newly made .svg file on your desktop and open it to see the results (any web browser should work).

You can also skip the tedious effort of manually defining all the words yourself by having it pull words from a text file and creating a frequency word cloud.
Create a text file on your desktop and type in some words of your choice. Make sure to save your text file.

Go back to ISE and comment out your first function and add a new line.
```powershell
Get-Content .\words.txt | New-WordCloud -Path .\wordcloud2.svg -ImageSize 1080p
```
Again, find your .svg file and open it to see the results.

Lastly, you can even have it use words that are currently in your clipboard to create a word cloud. Again, comment out the 2nd function and add a new line.
Go to any website and copy some plain text before running the script.
```powershell
Get-Clipboard | New-WordCloud -Path .\wordcloud3.svg -Typeface Georgia -ImageSize 1080p
```

There are even more parameters you can use when creating your word cloud such as choosing a specific word to be focused or different types of rotation for the words. Those can be accomplished by defining the parameter in the function.
```powershell
Get-Content .\words.txt | New-WordCloud -Path .\wordcloud2.svg -ImageSize 1080p -FocusWord <word of choice>
```
```powershell
Get-Content .\words.txt | New-WordCloud -Path .\wordcloud2.svg -ImageSize 1080p -AllowRotation AllUpright
```
Examples of focused words and rotations can be found here https://github.com/vexx32/PSWordCloud/blob/main/Examples/Examples.md

You can create a new script for each one of the different functions or follow as I did by just commenting out the other two that aren't going to be used. 