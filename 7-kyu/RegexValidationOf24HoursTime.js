/* https://www.codewars.com/kata/56a4a3d4043c316002000042/train/javascript

Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:

Accepted: 01:00 - 1:00
Not accepted: 24:00

You should check for correct length and no spaces.
*/
function validateTime(time) {
  res = /^(([0-1]?\d)|(2[0-3])):[0-5][0-9]$/g.test(time)
  return res
}

console.log(validateTime('01:00')) // true
console.log(validateTime('1:00')) // true
console.log(validateTime('00:00')) // true
console.log(validateTime('13:1')) // false
console.log(validateTime('12:60')) // false
