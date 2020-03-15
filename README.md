# CzWordGame

* This is a word game that has both a czech and an english version. The whole purpose of this was to practice the process of turning ideas to actual functional apps no matter how abstract or primitive they might look, but my whole purpose was to actually think of something that might sound (to me) a bit difficult to create and to actually plan it and create it from nothing, because I don't like following tutorials and copying code.


## How does it work?
* This is just a basic word game that has two versions, but the thing that I thought word games missed (not all of them, just the ones I encountered) is a leveling system or in other words, a sense of achievement. So I implemented that and put the function that handles the titles and the scores in the backend just to try to make the UI as functional and smooth as possible. 

* It's also made in a way that it never lets the user answer the same word twice. There's a function that filters the words returned and only returns the words that the user has never seen before

* I also made a gameHistory array to store the words the user has solved, for the sake of allowing users to come back to what they solved before to remember it, study it, etc.

* I wrote all the words in the database myself from the dictionaries I use to study (I am majoring in Czech studies), which are Meriam-Webster (English) and nechybujte.cz (Czech)
