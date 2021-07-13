function likes(names) {
  const len = names.length

  switch (len) {
    case 0:
      return 'no one likes this'

    case 1:
      return `${names.shift()} likes this`

    case 2:
    case 3:
      const lastName = names.pop()
      const joinedNames = names.join(', ')
      return `${joinedNames} and ${lastName} like this`

    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
