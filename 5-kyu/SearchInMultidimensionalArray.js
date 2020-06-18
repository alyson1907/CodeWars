/* https://www.codewars.com/kata/52840d2b27e9c932ff0016ae

Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

    locate(['a','b',['c','d',['e']]],'e'); // should return true
    locate(['a','b',['c','d',['e']]],'a'); // should return true
    locate(['a','b',['c','d',['e']]],'f'); // should return false
*/

const aux = [];
const flat = (arr) => {
  arr.forEach((el) => (Array.isArray(el) ? flat(el) : aux.push(el)));
  return aux;
};

const locate = (arr, value) => {
  return flat(arr).some((el) => el === value);
};

console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'e')); // should return true
