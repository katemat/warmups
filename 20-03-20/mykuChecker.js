var age = Number(prompt("Enter your age please:"));

if( age > 65) {
    console.log("You qualify for iur senior discount");
} else if(age < 65 && age >0) {
    console.log("Sorry, you have to pay full price");
} else {
    console.log("Wrong details!")
}
