const assert = require('assert')

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
  const finalStr = catString(letters, rails, numberRails)
  return finalStr
}

const decodeRailFenceCipher = (string, numberRails) => {
  if (!string) return ''

}

assert.equal(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN")
// assert.equal(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE")
// assert.equal(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l")
