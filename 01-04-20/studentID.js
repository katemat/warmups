// Creating Student IDs
// Write a function that takes a user's:
// name e.g. "bob"
// bio e.g. "I like to write code and stuff."
// secret e.g. "PURPLE"
// In the function, count the number of words in the bio.
// Multiply the number from step 2, by the number of letters in the user's name.
// Concatenate the user's name and step 3 e.g. bob93
// Concatenate the middle letter of their secret and the letter's index number e.g. if secret is PURPLE, you can choose either R2 or P3 (since there are two middle letters in that secret).
// Output the concatenation of steps 4 and 5 e.g. bob93P3.

var name = prompt("what's your name").toUpperCase()
var bio = prompt("what you want to do");
var secretWord = prompt("Enter 1 secret key-word").toUpperCase();

var studenId = function (name, bio, secretWord) {
    var stringCount = name.length;
    var letterCount = bio.split(' ').length;
    var magicNumber = stringCount * letterCount;
    var concatString = name + magicNumber;
    var indexOfMiddleLetter = Math.floor((secretWord.length)/2);
    var stringToArray = secretWord.split('');
    var middleLetter = stringToArray[indexOfMiddleLetter];
    var student_Id = concatString + middleLetter + indexOfMiddleLetter;
    return student_Id;
}

var result = studenId(name, bio, secretWord);
console.log(`student ID ${result}`);