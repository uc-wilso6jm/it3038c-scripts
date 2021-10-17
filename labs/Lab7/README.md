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
Now we will want to define our words that will be used and define any parameters for the word cloud
```powershell
New-WordCloud -Path .\wordcloud.svg -Typeface Consolas -WordSizes @{
    cyber = Get-Random -Maximum 10 -Minimum 1 
    networking = Get-Random -Maximum 15 -Minimum 1 
    programming = Get-Random -Maximum 18 -Minimum 1 
    code = Get-Random -Maximum 20 -Minimum 1 
    database = Get-Random -Maximum 8 -Minimum 1 
    cloud = Get-Random -Maximum 12 -Minimum 1 
}
```
*Note: The path being defined as ".\wordcloud.svg" will save the file to whatever your current working directory is. I recommend changing to your desktop directory to make it easy to find.



I've provided a text file in my repository that has some test words you can use to see how the script runs before customizing it yourself.