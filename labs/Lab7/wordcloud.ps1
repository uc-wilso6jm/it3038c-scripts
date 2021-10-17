Import-Module PSWordCloud

# Manually list the words you want to be created in the word cloud.
# Defines the path to where the image is saved is set to whatever directory you are currently in.
# Define the font that gets used, image size, or any rotation of the words.

New-WordCloud -Path .\wordcloud.svg -Typeface Consolas -WordSizes @{
    cyber = Get-Random -Maximum 10 -Minimum 1 
    networking = Get-Random -Maximum 15 -Minimum 1 
    programming = Get-Random -Maximum 18 -Minimum 1 
    code = Get-Random -Maximum 20 -Minimum 1 
    database = Get-Random -Maximum 8 -Minimum 1 
    cloud = Get-Random -Maximum 12 -Minimum 1 
}

# Pulls words from a text file in the same directory
# If text file is outside of current directory, write entire path to the file out
# This creates a frequency based word cloud

Get-Content .\words.txt | New-WordCloud -Path .\wordcloud2.svg -ImageSize 1080p

# Pulls words from your current clipboard
# Also a frequency based word cloud

Get-Clipboard | New-WordCloud -Path .\wordcloud3.svg -Typeface Georgia -ImageSize 1080p