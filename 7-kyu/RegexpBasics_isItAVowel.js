/* https://www.codewars.com/kata/567bed99ee3451292c000025/train/javascript
  Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.
*/
String.prototype.vowel = function() {
  return /^(a|i|u|e|o){1}$/i.test(this)
}

console.log(''.vowel()) // false
console.log('ou'.vowel()) // false
console.log('z'.vowel()) // false
console.log('lol'.vowel()) // false
console.log('a'.vowel()) // true
console.log('E'.vowel()) // true
