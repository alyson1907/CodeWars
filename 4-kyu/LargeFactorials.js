/* https://www.codewars.com/kata/557f6437bf8dcdd135000010/train/javascript
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language.
*/

const multiply = (str, num) => {
  const digits = str.split('').reverse();
  let carry = 0;
  const result = digits.map((digit) => {
    const product = digit * num + carry;
    carry = parseInt(product / 10);
    return product % 10;
  });

  // Handling carry
  while (carry) {
    result.push(carry % 10);
    carry = parseInt(carry / 10);
  }

  return result.reverse().join('');
};

const factorial = (n) => {
  if (n < 0) return null;
  else if (n === 0 || n === 1) return '1';
  let result = '1';
  while (n > 1) {
    result = multiply(result, n);
    n--;
  }
  return result;
};

console.log(factorial(1)); // '1'
console.log(factorial(5)); // '120'
console.log(factorial(9)); // '362880'
console.log(factorial(15)); // '1307674368000'
