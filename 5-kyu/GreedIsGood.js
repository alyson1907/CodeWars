/*
  Greed is a dice game played with five six-sided dice.
  Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
    Three 1's => 1000 points
    Three 6's =>  600 points
    Three 5's =>  500 points
    Three 4's =>  400 points
    Three 3's =>  300 points
    Three 2's =>  200 points
    One   1   =>  100 points
    One   5   =>   50 point
    A single die can only be counted once in each roll.
    For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
    Example scoring
    Throw       Score
    ---------   ------------------
    5 1 3 4 1   50 + 2 * 100 = 250
    1 1 1 3 1   1000 + 100 = 1100
    2 4 4 5 4   400 + 50 = 450
*/

function score (dice) {
  const repetitions = [0, 0, 0, 0, 0, 0]
  const result = [
    {
      normal: 100,
      triple: 1000,
    },
    {
      normal: 0,
      triple: 200,
    },
    {
      value: 3,
      normal: 0,
      triple: 300,
    },
    {
      normal: 0,
      triple: 400,
    },
    {
      normal: 50,
      triple: 500,
    },
    {
      normal: 0,
      triple: 600,
    },
  ]

  dice.forEach(die => {
    repetitions[die - 1] += 1
  })

  const pointsPerDie = result.map((die, i) => {
    if (repetitions[i] > 3) return die.triple + die.normal * (repetitions[i] - 3)
    else if (repetitions[i] === 3) return die.triple
    return die.normal * repetitions[i]
  })

  console.log(pointsPerDie)

  const totalPoints = pointsPerDie.reduce((acc, value) => acc + value, 0)
  return totalPoints
}

score( [5, 1, 3, 4, 1] ) // 50 + 2 * 100 = 250
score( [1, 1, 1, 3, 1] ) // 1000 + 100 = 1100
score( [2, 4, 4, 5, 4] ) // should be 400 + 50 = 450
