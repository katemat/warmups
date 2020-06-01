var years = [1930,1931,1932,1933,1934,1935,1936,1938,1940,1941,1945,1949,1950];

while(yourSay !== 'BYE') {
    var yourSay = prompt("Please ask Grandma:");
    if (yourSay == yourSay.toUpperCase()) {
        //console.log(`NO, NOT SINCE ${years[Math.floor(Math.random()*years.length)]}`);
        var minYear = 1930;
        var maxYear = 1950;
        var year = Math.floor(Math.random() * (maxYear-minYear) + 1) + minYear;
        console.log(`NO, NOT SINSE ${year}`)
    } else {
        console.log('HUN?! SPEAK UP, Sonny!');
    }   
}

//var year = Math.floor((Math.random() * (1950-1930+1)) + 1930)