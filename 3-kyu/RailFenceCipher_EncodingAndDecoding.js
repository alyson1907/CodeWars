const assert = require('assert')
// https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
// Cycle = (numberRails * 2) - 2
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
  console.log(JSON.stringify(rails))
  return encoded
}

const decodeRailFenceCipher = (string, numberRails) => {
  if (!string) return ''
  const letters = string.split('')
  const rails = setupRails(letters, numberRails)
  const breakSize = parseInt(string.length / numberRails)
  let currBreakIdx = 0
  const strParts = []
  let decoded = ''
  while (currBreakIdx < string.length) {
    strParts.push(string.slice(currBreakIdx, currBreakIdx + breakSize))
    currBreakIdx += breakSize
  }
  console.log(strParts)


}
encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)
decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)
// assert.equal(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN")
// assert.equal(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE")
// assert.equal(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l")
