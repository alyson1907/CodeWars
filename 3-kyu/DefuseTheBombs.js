// Defuse all of the Bombs! https://www.codewars.com/kata/54d558c72a5e542c0600060f/train/javascript
// 10
Bomb.diffuse(42)

// 9
Bomb.diffuse(42)
Bomb.diffuse(42)
Bomb.diffuse(42)
Bomb.diffuse(42)
Bomb.diffuse(42)

// 8
Bomb.diffuse(this.BombKey);

// 7
this.diffuseTheBomb = () => true
Bomb.diffuse()

// 6
Bomb.diffuse(3.14159)

// 5
Bomb.diffuse(new Date().setFullYear(new Date().getFullYear() - 4))

// 4
Bomb.diffuse(Object.freeze({ key: 43 }))

// 3

function obj () {
  this.shouldBeLess = true
}

obj.prototype.valueOf = function () {
  if (this.shouldBeLess) {
    this.shouldBeLess = false
    return 5
  }
  return 15
}
Bomb.diffuse(new obj())

// 2
let flag = true
Math.random = () => {
  if (flag) {
    flag = false
    return 0.5
  }
  return 1
}
Bomb.diffuse(42)

console.log(Bomb)
console.log(Bomb.diffuse.toString())
