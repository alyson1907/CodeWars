/* https://www.codewars.com/kata/5659c6d896bc135c4c00021e

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
*/

function nextSmaller (n) {
  const checkSameDigits = (number1, number2) => {
    const digits1 = number1.toString().split('')
    const digits2 = number2.toString().split('')
    digits1.forEach(digit => {
      const idx = digits2.findIndex(el => el === digit)
      if (idx !== -1) digits2.splice(idx, 1)
    })
    return digits2.length === 0
  }
  let aux = n - 1
  let sameDigits = false
  /* While `n` has the same number of digits than aux,
    AND checkSameDigits is not true
    AND aux is positive
  */

  while (n.toString().split('').length === aux.toString().split('').length && sameDigits === false && aux > 0) {
    console.log(`aux`, aux, aux.toString().split('').length)
    if (checkSameDigits(n, aux)) return aux
    aux--
  }
  return -1
}

// console.log(nextSmaller(21)) // == 12
// console.log(nextSmaller(531)) // == 513
// console.log(nextSmaller(2071))// == 2017

// console.log(nextSmaller(9)) // == -1
// console.log(nextSmaller(111)) // == -1
// console.log(nextSmaller(135)) // == -1
// console.log(nextSmaller(127)) // == -1
console.log(nextSmaller(123456789)) // == -1
