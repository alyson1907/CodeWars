/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

export class Challenge {
  static solution(number) {
    const multiples = []
    number--
    while (number >= 3) {
      if (number % 3 === 0 || number % 5 === 0) multiples.push(number)
      number--
    }
    return multiples.reduce((acc, value) => acc + value, 0)
  }
}
