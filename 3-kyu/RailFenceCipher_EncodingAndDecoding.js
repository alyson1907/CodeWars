const assert = require('assert')
// https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
// Cycle = (numberRails * 2) - 2


const encodeRailFenceCipher = (string, numberRails) => {
  const setupRails = (letters, numberRails) => {
    const cycle = (numberRails * 2) - 2
    let currNumber = 0
    const rails = letters.map(char => {
      if (currNumber === cycle) currNumber = 0
      currNumber++
      return currNumber
    })
    return rails
  }

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
// assert.equal(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE")
assert.equal(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l")
