/* https://www.codewars.com/kata/53d40c1e2f13e331fc000c26
The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him. Gabriel thunders to the pope:

  "Gather all of the learned men in Pisa, especially Leonardo Fibonacci. In order for the crusades in the holy lands to be successful,
  these men must calculate the millionth number in Fibonacci's recurrence.
  Fail to do this, and your armies will never reclaim the holy land. It is His will."

The angel then vanishes in an explosion of white light.

Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself. He never was very good at math.

He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history,
he cannot represent this number. If he only knew about the invention of zero, it might make this sort of thing easier.

He decides to go back to bed. He consoles himself, The Lord would never challenge me thus; this must have been some deceit by the devil.
A pretty horrendous nightmare, to be sure.

Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.

In this kata you will have to calculate fib(n) where:

  fib(0) := 0
  fib(1) := 1
  fin(n + 2) := fib(n + 1) + fib(n)
Write an algorithm that can handle n up to 2000000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)?
Use this to reason what value fib has to have for negative values.

HINT II: See https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4
*/
var assert = require('assert')

// Using Memoization (not able to complete the kata)
function fibMemo (n, mem) {
  const createMemo = () => {
    const memoArr = new Array(n + 1)
    // Setting values for 0 and 1 positions since Fib(0) = 0 and Fib(1) = 1
    memoArr[0] = 0n
    memoArr[1] = 1n
    return memoArr
  }

  const memo = mem ? mem : createMemo()
  if (memo[n] != null) return memo[n]
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
  return BigInt(memo[n])
}

/* Using explicit formula from Johannes Kepler (Read more: https://pt.wikipedia.org/wiki/Sequência_de_Fibonacci#Fórmula_explícita)
(not able to complete the kata (Maximum call stack)) */
const fibAurea = n => {
  const res = (1 / Math.sqrt(5)) * (Math.pow(((1 + Math.sqrt(5)) / 2), n) - Math.pow(((1 - Math.sqrt(5)) / 2), n))
  return res
}

// Submitted
function fib (n) {
  if (n == 0 || n == 1) {
    return BigInt(n)
    // If n is an positive `even` number
  } else if (n >= 2 && n % 2 == 0) {
    const k = n / 2
    const fibK = fib(k)
    return (2n * fib(k - 1) + fibK) * fibK
    // If n is an positive `odd` number
  } else if (n >= 2) {
    const k = (n + 1) / 2
    const fibK1 = fib(k - 1)
    const fibK2 = fib(k)
    return fibK2 * fibK2 + fibK1 * fibK1
    // Negative numbers
  } else {
    a = 0n
    b = 1n
    for (let i = 0; i > n; i--) {
      [a, b] = [b - a, a]
    }
    return a
  }
}

assert.equal(fib(0), 0n)
assert.equal(fib(1), 1n)
assert.equal(fib(2), 1n)
assert.equal(fib(3), 2n)
assert.equal(fib(4), 3n)
assert.equal(fib(5), 5n)
assert.equal(fib(-6), -8n)

console.log(fibAurea(20))
