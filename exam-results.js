// Exam Results
// A group of students sitting exams every quarter score the following results throughout the year:

// Write the code to find:


var exam_results = {
    Greg: {
        Biology: [90, 75, 23, 60],
        Maths: [100, 80, 30, 45]
    },
    Sarah: {
        Biology: [70, 65, 80, 95],
        Maths: [80, 77, 64, 90]
    },
    Thomas: {
        Biology: [40, 60, 75, 98],
        Maths: [36, 50, 67, 82]
    }
}

// How much Greg scored in their first Biology exam.
var gregFirstBiologyScore = exam_results.Greg.Biology[0];
console.log(gregFirstBiologyScore);


// How much Sarah scored in their last Maths exam.
var sarahMathsScores = exam_results.Sarah.Maths;
var lastElementIndex = sarahMathsScores.length - 1;
var sarahLastMathsScore = exam_results.Sarah.Maths[lastElementIndex];
console.log(sarahLastMathsScore);


// The highest score Thomas achieved in Maths throughout the year.
var thomasMathsScores = exam_results.Thomas.Maths;

var maxScore = Math.max(...thomasMathsScores)
console.log(maxScore);

//another way to find highest
var highestScore = function(arr) {
    var highest = arr[0];
    arr.forEach(function(num) {
        if(num > highest) {
            highest = num;
        }
    });
    return highest;
}
console.log(`The highest score Thomas achieved in Maths ${ highestScore(exam_results.Thomas.Maths)}`);

// The quarter that Greg achieved his lowest score in Biology in the year.

var gregBiologyScores = exam_results.Greg.Biology;
var minScore = Math.min(...gregBiologyScores)
console.log(minScore);

//another way to find highest
var lowestScore = function(arr) {
    var lowest = arr[0];
    //using arr[0] - is more relevant to use
    arr.forEach(function(num) {
        if(num < lowest) {
            lowest = num;
        }
    });
    return lowest;
}
console.log(`Greg achieved lowest score in Biology in the quarter ${ exam_results.Greg.Biology.indexOf(lowestScore(exam_results.Greg.Biology))}`);

// Extension:
// The average of Sarah's scores in Maths for the whole year.

var average  = function (arr) {
    var sum = 0;
    arr.forEach(function(num) {
        sum += num;
    })
    return sum/arr.length;
}

console.log(`The average of Sarah's score in Maths ${average(exam_results.Sarah.Maths)}`)