var checkIfPalindrome = function (phrase) {
    const regex = /[^A-Za-z0-9]/g;
    var phraseOnlyLetters = phrase.replace(regex,'');
    // var phraseArray = phraseOnlyLetters.split('');
    // var reversedArray = phraseArray.reverse();
    // var reversedPhrase = reversedArray.join('').toLowerCase();
    var reversedPhrase = phraseOnlyLetters.split('').reverse().join('');

    if (phraseOnlyLetters.toLowerCase() === reversedPhrase.toLowerCase()) {
        return (`The phrase "${ phrase }" is a palindrome`);
    } else {
        return (`No, the phrase "${ phrase }" is  not a palindrome`);
    }
}

var result = checkIfPalindrome('A man, a plan, a canal: Panama.');
console.log(result);




// tried to check array
var phraseArray = ['Ah, Satan sees Natasha!', 'Aibohphobia A', 'Air an aria.', 'Al lets Della call Ed Stella A'];
phraseArray.forEach(element => { console.log(checkIfPalindrome(element))   
});

// Ah, Satan sees Natasha!
// Aibohphobia
// Air an aria.
// Al lets Della call Ed Stella.