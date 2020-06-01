// Ask the user what the current temperature is, if the A/C 
// is functional, and what temperature they wish it was.
//  - If the airconditioner is functional and the current 
//     temperature is above the the desired temperature... 
//     display "Turn on the A/C Please"
//  - If the airconditioner is non-functional and the current 
//     temperature is above the the desired temperature... 
//     display "Fix the A/C now!  It's hot!"
//  - If the airconditioner is non-functional and the current 
//     temperature is below the the desired temperature... 
//     display "Fix the A/C whenever you have the chance...  It's cool..."


var  currentTemp = Number(prompt("Enter the current temperature:"));

var desiredTemp = 22;
var acFunctioanal = false;

console.log("A/C functional? " + acFunctioanal);

if (!acFunctioanal) {
    if (currentTemp >= desiredTemp) {
        console.log("Fix the A/C now! It's hot!");
    } else {
        console.log("Fix A/c whenever you have the chance... It's cool...");
    }
} else {
    if (currentTemp > desiredTemp) {
        console.log("Turn ON AC");
    } else {
        console.log("You are Ok!");
}
}