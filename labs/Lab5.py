print('Please enter any word you would like: ')
newWord = str(input())
vowels = 0
consonants =0

for i in newWord:
    if(i=='a' or i=='e' or i=='i' or i=='o' or i=='u' or i=='A' or i=='E' or i=='I' or i=='O' or i=='U'):
        vowels = vowels+1
    else:
        consonants = consonants+1    

print('Your word is ' + newWord) 
print('There are ' + str(len(newWord)) + ' letters in your word, ' + str(vowels) + ' vowels in your word, and ' + str(consonants) + ' consonants in your word')



#print('There are ' + str(len(newWord)) + ' letters in your word')
#print('There are ' + str(vowels) + ' vowels in your word')
#print('There are ' + str(consonants) + ' consonants in your word')
