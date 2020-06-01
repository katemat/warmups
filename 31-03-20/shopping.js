//Shopping
// You buy the following at the supermarket:

// Salmon tins
// Ice-cream
// Frozen berries
// Pasta
// Tomatoes
// Spinach
// Toilet paper
// Store the list of items in an appropriate data type.
// Write code to display the last 3 items you bought.
// Your kid asks you whether you bought any chocolate. Write code to check your list of items to see if you have any chocolate, and if you do, tell them "yes, if you do all your chores". Otherwise tell them "no, it will rot your teeth".

var shoppingList = ['salmon tins', 'ice-cream', 'frozen berries', 'pasta', 'tomatoes', 'spinach', 'toilet paper'];
var lastThreeItems = shoppingList.slice(shoppingList.length-3).join();

console.log(`The last three items you bought ${ lastThreeItems }`);

//var answer = prompt('Did you buy chocolate? Y or N');

var keyWord = 'chocolate';
if (shoppingList.includes(keyWord)) {
    console.log('Yes, if you do all your chores');
} else {
    console.log('No, it will rot your teeth');
}







