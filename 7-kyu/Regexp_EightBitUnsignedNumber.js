/* https://www.codewars.com/kata/567e8f7b4096f2b4b1000005/train/javascript
  Implement `String#eight_bit_number`, which should return true if given object is a number representable
  by 8 bit unsigned integer (0-255), false otherwise.
  It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/
const assert = require('assert')

String.prototype.eightBitNumber = function () {
  return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(this)
}

assert.equal(''.eightBitNumber(), false)
assert.equal('0'.eightBitNumber(), true)
assert.equal('00'.eightBitNumber(), false)
assert.equal('55'.eightBitNumber(), true)
assert.equal('042'.eightBitNumber(), false)
assert.equal('123'.eightBitNumber(), true)
assert.equal('255'.eightBitNumber(), true)
assert.equal('256'.eightBitNumber(), false)
assert.equal('999'.eightBitNumber(), false)
