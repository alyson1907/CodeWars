/* https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/typescript
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

    isIsogram "Dermatoglyphics" == true
    isIsogram "aba" == false
    isIsogram "moOse" == false -- ignore letter case
*/

export function isIsogram(str: string) {
  return !str.split('').some((letter: string, idx: number) => {
    for (let i: number = idx + 1; i < str.length; i++) {
      console.log(letter.toLowerCase(), str[i].toLowerCase())
      if (letter.toLowerCase() === str[i].toLowerCase()) return true
    }
    return false
  })
}

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false
