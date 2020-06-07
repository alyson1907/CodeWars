function cakes (recipe, available) {
  let numberOfCakes = 0
  const recipeEntries = Object.entries(recipe)

  while (recipeEntries.every(([ingredient, qty]) => available[ingredient] && available[ingredient] >= qty)) {
    recipeEntries.forEach(([ingredient, qty]) => {
      available[ingredient] -= qty
    })
    numberOfCakes++
  }
  return numberOfCakes
}
