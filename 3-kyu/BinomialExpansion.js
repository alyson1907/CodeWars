/* https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b/train/javascript
  The purpose of this kata is to write a program that can do some algebra. Write a function expand
that takes in an expresion with a single, one character variable, and expands it. The expresion
is in the form (ax+b)^n where a and b are integers which may be positive or negative, x is any one
character long variable, and n is a natural number. If a = 1, no coeficient will be placed in front
of the variable. If a = -1, a "-" will be placed in front of the variable.

  The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are
the coefficients of the term, x is the original one character variable that was passed in the original
expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing
order. If the coeficient of a term is zero, the term should not be included. If the coeficient of a term
is one, the coeficient should not be included. If the coeficient of a term is -1, only the "-" should be
included. If the power of the term is 0, only the coeficient should be included. If the power of the term
is 1, the carrot and power should be excluded.

Examples:
      expand("(x+1)^2");      // returns "x^2+2x+1"
      expand("(p-1)^3");      // returns "p^3-3p^2+3p-1"
      expand("(2f+4)^6");     // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
      expand("(-2a-4)^0");    // returns "1"
      expand("(-12t+43)^2");  // returns "144t^2-1032t+1849"
      expand("(r+0)^203");    // returns "r^203"
      expand("(-x-1)^2");     // returns "x^2+2x+1"
*/

const generatePascalTriangle = (lines = 0) => {
  const triangle = [[1n]]
  if (!lines) return triangle
  // n - current line
  for (let n = 1; n < lines + 1; n++) {
    const qtyElem = n + 1
    const coef = []
    // i - current element
    for (let i = 0; i < qtyElem; i++) {
      const up = triangle[n - 1][i] || 0n
      const upLeft = triangle[n - 1][i - 1] || 0n
      coef[i] = up + upLeft
    }
    triangle.push(coef)
  }
  return triangle
}

const expand = expr => {
  const getPower = (expr) => parseInt(expr.split('^').pop())
  const power = getPower(expr)
  const pascal = generatePascalTriangle(power)
  console.log(power)
  console.log(pascal)
}

console.log(expand('(-2k-3)^3'))
