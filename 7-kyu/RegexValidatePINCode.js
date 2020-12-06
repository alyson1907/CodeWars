/* https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
  If the function is passed a valid PIN string, return true, else return false.

  Examples:
  "1234"   -->  true
  "12345"  -->  false
  "a234"   -->  false
*/

function validatePIN(pin) { 
  return pin.search(/^(\d{4}|\d{6})$/g) == -1 ? false : true
}

console.log(validatePIN('1')) // false
console.log(validatePIN('12')) // false
console.log(validatePIN('123')) // false
console.log(validatePIN('12345')) // false
console.log(validatePIN('1234567')) // false
console.log(validatePIN('1111')) // true
console.log(validatePIN('123456')) // true
console.log(validatePIN('098765')) // true
console.log(validatePIN('000000')) // true
