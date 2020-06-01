// Quiz Letter blocks
// Language: Javascript or Ruby
// You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are 19 blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:
// If you test these words, these results will happen:

// can_make_word("A")
// # => true
// can_make_word("BARK")
// # => true
// can_make_word("BOOK")
// # => false
// can_make_word("TREAT")
// # => true
// can_make_word("COMMON")
// # => false
// can_make_word("SQUAD")
// # => true
// can_make_word("CONFUSE")
// # => true
// can_make_word("BOUGHT")
// # => false
// Write the can_make_word function to output the results above.

// assumption: each block can be used once

let words = ["A", "BARK", "BOOK", "TREAT", "COMMON", "SQUAD", "CONFUSE"]

let blocks = [
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['T', 'G'],
  ['Q', 'D'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['A', 'N'],
  ['E', 'R'],
  ['F', 'S'],
  ['L', 'Y'],
  ['P', 'C'],
  ['Z', 'M']
]

function canMakeWord(word) {

  var letters = [...word]
  var length = letters.length

  // create a copy of blocks to manipulate with it
  var copyBlocks = new Set(blocks)
  //   var copyBlocks = blocks.slice(0)

  for (let letter of letters) {
    for (let block of copyBlocks) {
      // indexOf return  -1 if letter not found
      let index = block.indexOf(letter);
      //   console.log(index)

      if (index !== -1) {
        length--;
        // remove block from copyBlocks and check again  
        copyBlocks.delete(block)
        break
      }
    }

  }
  //return length  - will return number
  return !length
}


words.forEach(word => console.log(`${word}: ${canMakeWord(word)}`));