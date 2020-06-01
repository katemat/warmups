console.log("The Fortune Teller");

var luckyNumber = Number(prompt("Please enter your lucky number"));
var children = 5;
var partnerName = "John";
var geoLocation = "Tasmania";
var jobTitle = "butcher";

if (luckyNumber > 3) {
    console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + (children-2) + " kids.");
} else {
    console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + (children+1) + " kids.");
}
