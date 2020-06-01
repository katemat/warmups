// var currentYear = new Date().getFullYear();

// for (var i = 1900; i <= currentYear; i++) {
//     if (i % 4 == 0) {
//         console.log(`${ i } is leap year`);
//     }
// }


var counter = 1;

for(var i = 1; i <= 200; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
    // if (!i % 2 == 0 && !counter % 2 == 0) {
    //     console.log(`${ i } is odd number`);
    //     //console.log(counter);
    // }
    // counter++;
}

