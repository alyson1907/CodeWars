/* https://www.codewars.com/kata/5e4eb72bb95d28002dbbecde/train/javascript
  Your function should return a valid regular expression. This is a pattern which is normally used to
  match parts of a string. In this case will be used to check if all the characters given in the input
  appear in a string.

  Input:
    Non empty string of unique alphabet characters upper and lower case.
  
  Output:
    Regular expression pattern string.

  Examples:
  Regex pattern will be tested like this.
    const abc = "abc";
    const pattern = regexContainsAll(abc);
    const str = "zzzaaacccbbbzzz";
    new RegExp(pattern).test(str);  // -> true
*/

function regexContainsAll(str) {
  return new RegExp(`${[...str].map((c) => '(?=[^ ]*' + c + ')').join('')}`, 'g')
}

const a = 'abc'
const b = 'abcd'
const Apattern = regexContainsAll(a)
const Bpattern = regexContainsAll(b)
console.log(new RegExp(Apattern).test('zzzaaacccbbbzzz'))
console.log(new RegExp(Bpattern).test('zzzaaacccbbbzzz'))
