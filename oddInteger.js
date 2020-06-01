// The Odd Integer Warmup
// You have an array of integers. Find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// For Example: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], answer is 5 since it is the only number that appears an odd number of times.

const numbers = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
// no need to sort
var sortedNumbers = numbers.sort()
var counters = {}
// hard coded :((
// previous = -100; changed to undefined and changed the code

for (let i= 0; i < sortedNumbers.length; i++) {
    let number = sortedNumbers[i];
    if (counters[number] == undefined)
        counters[number] = 1;
    else counters[number] += 1;
}
console.log(counters)

var oddTimesAppearsNumber;

Object.keys(counters).forEach(key => {
    if (counters[key] % 2 === 1) {
        oddTimesAppearsNumber = key
    }
})

console.log(Number(oddTimesAppearsNumber));