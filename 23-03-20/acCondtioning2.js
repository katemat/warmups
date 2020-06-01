var desiredTemp = Number(prompt("Enter desire temperature"));

var  currentTemp = Number(prompt("Enter the current temperature:"));

var acFunctioanal = String(prompt("Is A/C functional? Y/N:"));

//console.log("A/C functional? " + acFunctioanal);

if (acFunctioanal == "N" && currentTemp>desiredTemp) {
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