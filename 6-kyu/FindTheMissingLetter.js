function findMissingLetter (array) {
  const nextLetter = ch => String.fromCharCode(ch.charCodeAt(ch.length - 1) + 1)
  const letterBeforeMissing = array.find((letter, idx) => array[idx + 1] != nextLetter(letter))

  return nextLetter(letterBeforeMissing);
}
