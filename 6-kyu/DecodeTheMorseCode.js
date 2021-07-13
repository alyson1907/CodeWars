decodeMorse = function (morseCode) {
  const codedWords = morseCode.split('   ')
  // Removing empty strings
  const cleanCodedWords = codedWords.filter((word) => word != '')

  const codedLettersPerWord = cleanCodedWords.map((word) => word.split(' '))

  const decodedLettersPerWord = codedLettersPerWord.map((letters) => letters.map((letter) => MORSE_CODE[letter]))

  const flattenedWords = decodedLettersPerWord.map((letterArr) => letterArr.join(''))

  return flattenedWords.join(' ')
}
