function VigenèreCipher(key, abc) {
  this.encodeOrDecode = (str, encode = true) => {
    const final = str.split('').reduce((str, ch, i) => {
      const keyCh = key[i % key.length]
      
      // Index of the First occurence of the received `str.char` in our alphabet
      const firstChIdx = abc.indexOf(ch)
      // Applying Caesar shift
      const shifted = encode ? (firstChIdx + abc.indexOf(keyCh)) : (firstChIdx + abc.length - abc.indexOf(keyCh))
      return firstChIdx >= 0
      ? str += abc[ shifted % abc.length]
      : str += ch
    }, '')

    return final
  }

  this.encode = function (str) {
    return this.encodeOrDecode(str)
  }

  this.decode = function (str) {
    return this.encodeOrDecode(str, false)
   
  }
}

const abc = 'abcdefghijklmnopqrstuvwxyz'
const key = 'password'
c = new VigenèreCipher(key, abc)

console.log(c.encode('codewars')) // 'rovwsoiv'
console.log(c.decode('rovwsoiv')) // 'codewars'

console.log(c.encode('waffles')) // 'laxxhsj'
console.log(c.decode('laxxhsj')) // 'waffles'

console.log(c.encode('CODEWARS')) // 'CODEWARS'
console.log(c.decode('CODEWARS')) // 'CODEWARS'
