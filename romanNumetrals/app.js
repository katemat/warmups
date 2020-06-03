// Roman Numerals
// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Write a function to convert from normal numbers to Roman Numerals: e.g.

//  1  => I
// 10  => X
//  7  => VII
// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

// To see this in practice, consider the example of 1990.

// In Roman numerals 1990 is MCMXC:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII

const romanNumbersConvertor = (num) => {
  const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  var decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var converted = "";

  decimalNumbers.forEach((number, idx) => {
    while (number <= num) {
      converted += romanNumbers[idx];
      num -= number;
    }
  })

  return converted;
};

console.log(romanNumbersConvertor(1));
console.log(romanNumbersConvertor(5));
console.log(romanNumbersConvertor(19));
console.log(romanNumbersConvertor(99));
console.log(romanNumbersConvertor(2008));
console.log(romanNumbersConvertor(2000));