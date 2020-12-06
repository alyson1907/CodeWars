/* https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript
  Coding in function countAnimals. function accept two parameters:
  - animals, a string contains some animals;
  - count, an array list of which animals we should count. The result should be a number array.

  Example:
    countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
    countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
    countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
    countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]
*/

function countAnimals(animals, count) {
  const matched = count.map(search => animals.match(new RegExp(search, 'g')))
  return matched.map(m => m ? m.length : 0)
}

console.log(countAnimals('dog,cat',['dog','cat'])) // => [1,1]
console.log(countAnimals('dog,cat',['dog','cat','pig'])) // => [1,1,0]
console.log(countAnimals('dog,dog,cat',['dog','cat'])) // => [2,1]
console.log(countAnimals('dog,dog,cat',['pig','cow'])) // => [0,0]
