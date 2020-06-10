/* https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add('123', '321') -> '444'
add('11', '99')   -> '110'
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/
const assert = require('assert')

const sum2 = (c, d, pastCarry = 0) => {
  c = parseInt(c)
  d = parseInt(d)
  const sum = (c + d + pastCarry)
  const res = sum % 10
  return {
    carry: parseInt(sum / 10),
    result: res
  }
}

const add = (a, b) => {
  const digitsA = a.split('')
  const digitsB = b.split('')
  const addedNumber = []
  let carry = 0
  // Sums until any of the numbers is out of digits 
  while (digitsA.length > 0 && digitsB.length > 0) {
    const { carry: lastCarry, result } = sum2(digitsA.pop(), digitsB.pop(), carry)
    carry = lastCarry
    addedNumber.unshift(result)
  }
  // Handling carry
  const remainingDigits = digitsA.length ? digitsA : digitsB
  if (remainingDigits.length && carry) {
    while (carry) {
      const { carry: lastCarry, result } = sum2(remainingDigits.pop(), 0, carry)
      carry = lastCarry
      addedNumber.unshift(result)
    }
  } else if (carry) {
    addedNumber.unshift(carry)
  }
  const finalNumber = [...remainingDigits, ...addedNumber]
  return finalNumber.join('')
}

assert.equal(add('1', '1'), '2')
assert.equal(add('123', '456'), '579')
assert.equal(add('888', '222'), '1110')
assert.equal(add('1372', '69'), '1441')
assert.equal(add('12', '456'), '468')
assert.equal(add('101', '100'), '201')
assert.equal(add('63829983432984289347293874', '90938498237058927340892374089'), '91002328220491911630239667963')
