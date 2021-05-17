/* https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:
- i increments the value (initially 0)
- d decrements the value
- s squares the value
- o outputs the value into the return array
- Invalid characters should be ignored.

  parse("iiisdoso") => [8, 64]
*/

function parse(data: string): number[] {
    const letters: string[] = data.split('')
    let num: number = 0
    const result: number[] = []
    letters.forEach(ch => {
      if (ch === 'i') num++
      if (ch === 'd') num--
      if (ch === 's') num = num ** 2
      if (ch === 'o') result.push(num)
    })
    return result
}

console.log(parse("iiisdoso")) // [8, 64]
console.log(parse("iiisxxxdoso")) // [8, 64]
