// Filter Out the Geese
// Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
// var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

function gooseFilter (arr) {
    var filteredArray = arr.filter(function(word) {
        return geese.indexOf(word) === -1
    }) 
    return filteredArray
}
  
result = gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);

console.log(result);

//   The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. Filter usually works with sth is truthy or falsey.