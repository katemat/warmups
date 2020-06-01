// Melbourne Suburbs

// - Create a program that asks what suburbs you live in.
// - Depending on the answer, print an appropriate response
//  of your choosingMelbourn

var yourSuburb = prompt("Enter what suburb you live in").toLowerCase();

switch (yourSuburb) {
    case "werribee": 
        console.log("Werribee Zoo is only 10min drive ");
        break;
    case "newport":
        console.log("Great area!")
        break;
    case "north melbourne":
        console.log("You are close to CBD!");
        break;
    default: 
        console.log("Sorry, don't know this suburb");
}
