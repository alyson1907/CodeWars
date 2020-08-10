const assert = require('assert')
/* https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
Create two functions to encode and then decode a string using the Rail Fence Cipher.
This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails".
First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up
until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right 
to derive the encoded string.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

    W       E       C       R       L       T       E
      E   R   D   S   O   E   E   F   E   A   O   C  
        A       I       V       D       E       N    

The encoded string would be:

    WECRLTEERDSOEEFEAOCAIVDEN

Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include
punctuation. Don't filter out punctuation as they are a part of the string.
*/

const setupRails = (letters, numberRails) => {
  let sum = 1
  let currNumber = 0
  const rails = letters.map((char, i) => {
    if ((currNumber === 0 && i !== 0) || currNumber === numberRails - 1) sum = (-1 * sum)
    const res = currNumber + 1
    currNumber += sum
    return res
  })
  return rails
}

const encodeRailFenceCipher = (string, numberRails) => {
  const catString = (letters, rails, numberRails) => {
    let str = ''
    // i: number in rail we are looking for
    for (let i = 1; i <= numberRails; i++) {
      letters.forEach((char, j) => {
        // concatenating
        if (rails[j] === i) {
          str += letters[j]
        }
      })
    }
    return str
  }

  if (!string) return ''
  const letters = string.split('')
  const rails = setupRails(letters, numberRails)
  const encoded = catString(letters, rails, numberRails)
  return encoded
}

const decodeRailFenceCipher = (string, numberRails) => {
  if (!string) return ''
  const letters = string.split('')
  const cycle = (numberRails * 2) - 2
  const rails = setupRails(letters, numberRails)
  let currCipherNumber = 1
  let letterPos = 0
  while (letterPos < letters.length) {
    const i = rails.findIndex(el => el === currCipherNumber)
    if (i !== -1) {
      rails[i] = letters[letterPos]
      letterPos++
    } else currCipherNumber++
  }
  return rails.join('')
}

assert.equal(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN")
assert.equal(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE")
assert.equal(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l")
