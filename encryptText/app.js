// Alternating Split
// For building the encrypted string:

// Take every 2nd character from the string, then the other characters that are not every 2nd character, and concat them as a new String.
// Do this n times!
// To do the above, you must build an encrypt(message, n) method that performs like this:

// encrypt("This is a test!", 1) -> "hsi  etTi sats!"
// encrypt("This is a test!", 2) -> "s eT ashi tist!"

function encrypt(text, n) {
    let count = 0;
    let textEncrypt = text;
    while (count < n) {
        let everySecondChars = "";
        let otherChars = "";
        for (let i = 0; i < textEncrypt.length; i++) {
            if (i % 2 !== 0) {
                everySecondChars += textEncrypt[i]
            } else  {
                otherChars += textEncrypt[i]
            }
        }
        textEncrypt = everySecondChars + otherChars;
        count += 1;
    }
    return (textEncrypt);
}

let result1 = encrypt("This is a test!", 1);
let result2 = encrypt("This is a test!", 2);

console.log(result1);
console.log(result2);