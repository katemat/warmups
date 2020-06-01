// # fake map
// # Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.
// # makeFakeMap(5, 5);

// # // Sample outputs:

// # [
// # ["A","A","A","A","A"],
// # ["A","A","A","A","A"],
// # ["A","A","X","A","A"],
// # ["A","A","A","A","A"],
// # ["A","A","A","A","A"]
// # ];

var makeFakeMap = function (numColumns, numRows) {
    
    var randomColIndex = Math.floor(Math.random() * numColumns);
    console.log(randomColIndex);
    var randomRowIndex = Math.floor(Math.random() * numRows);
    console.log(randomRowIndex);

    var fakeMapArray =[];
    
    for (var row = 0; row < numRows; row++) {
        var rowArray = [];

        for (var col = 0; col < numColumns; col++) {
            if (row == randomRowIndex && col == randomColIndex) {
                rowArray.push("X")
            } else {
                rowArray.push("A")
            }
        } 
        fakeMapArray.push(rowArray);
    }
    console.log(fakeMapArray)
}

makeFakeMap(5,5)
