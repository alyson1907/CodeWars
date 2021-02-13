/* Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:
    camelCase("hello case"); // => "HelloCase"
    camelCase("camel case word"); // => "CamelCaseWord"
Don't forget to rate this kata! Thanks :)
*/

function camelCase(str: string): string {
  return str.split(' ').map(word => {
    const letters: Array<string> = word.split('')
    letters[0] = letters[0] && letters[0].toUpperCase()
    return letters.join('')
  }).join('')
}


console.log(camelCase("")) // ""
console.log(camelCase("test case")) // "TestCase"
console.log(camelCase("camel case method")) // "CamelCaseMethod"
console.log(camelCase("say hello ")) // "SayHello"
console.log(camelCase(" camel case word")) // "CamelCaseWord"
