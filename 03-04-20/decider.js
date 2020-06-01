// # CoinFlip
// ### The Ultimate Life Decider
// Never make a decision again!

// 1. Create a file called `decider.js`.
// 2. Write a function called `coinFlip` that will output **HEADS** or **TAILS** when called. It should decide between HEADS and TAILS randomly.
// 3. Write a loop that keeps calling your `coinFlip` function until **either** HEADS occurs 5 times, or TAILS occurs 5 times. At that point `console.log` the winner e.g. HEADS or TAILS. **Hint:** You will need to keep a count of the number of times HEADS occurs and TAILS occurs.

// var arr = ["HEADS", "TAILS"];

// var coinFlip = function() {
//     var luckyIndex = Math.floor(Math.random()*arr.length);
//     return (`***${arr[ luckyIndex ]}***`);
// }

// coinFlip(arr);

// counter = 0;

// while (counter < 5) {
//     console.log(coinFlip(arr));
//     counter += 1;
// }


var numOfHeads = 0;
var numOfTails = 0;
var hasntWon = true;

function coinFlip() {
    var randNum = Math.floor(Math.random()*2);

    if (randNum ===  0) {
        console.log("Heads");
        numOfHeads +=1;
        
    } else {
        console.log("Tails");
        numOfTails += 1;
    }
}

while (hasntWon) {
    coinFlip();

    if (numOfHeads === 5) {
        console.log("Heads is the winner");
        hasntWon = false;

    } else if (numOfTails === 5) {
        console.log("Tails is the winner");
        hasntWon = false;
    }
}