var assert = require('assert')

// Using Memoization (not able to complete the kata)
function fib (n, mem) {
  const createMemo = () => {
    const memoArr = new Array(n + 1)
    // Setting values for 0 and 1 positions since Fib(0) = 0 and Fib(1) = 1
    memoArr[0] = 0
    memoArr[1] = 1
    return memoArr
  }

  const memo = mem ? mem : createMemo()
  if (memo[n] != null) return memo[n]
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

function matrixDot (A, B) {
  let result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0))

  return result.map((row, i) => {
    return row.map((val, j) => {
      return A[i].reduce((sum, elm, k) => sum + (elm * B[k][j]), 0)
    })
  })
}

// Using explicit formula from Johannes Kepler (Read more: https://pt.wikipedia.org/wiki/Sequência_de_Fibonacci#Fórmula_explícita)
const fibAurea = n => {
  const res = BigInt((Math.pow(((1 + Math.sqrt(5)) / 2), n) - Math.pow(((1 - Math.sqrt(5)) / 2), n)) / Math.sqrt(5))
  console.log(BigInt(res))

}



console.log(fib(99))

// assert.equal( fib(0), 0n )
// assert.equal( fib(1), 1n )
// assert.equal( fib(2), 1n )
// assert.equal( fib(3), 2n )
// assert.equal( fib(4), 3n )
// assert.equal( fib(5), 5n )
// assert.equal( fib(-6), -8n )
