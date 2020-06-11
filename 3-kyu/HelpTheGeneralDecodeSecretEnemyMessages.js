/* https://www.codewars.com/kata/52cf02cd825aef67070008fa/train/javascript

General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war. Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to crack it though. So the general is asking you , his most odd but brilliant programmer.

You can call the encoder like this.

console.log (device.encode ('What the hell')) ;
Our cryptoanalysts kept poking at it and found some interesting patterns.

    console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;

    console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;  

    console.log (device.encode ('!@#$%^&*()_+-')) ;

    console.log ('abcdefghijklmnopqrstuvwxyz') ;

    console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
      return device.encode (a) ;
    }).join ('')) ;

    console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
      return device.encode ('_'+a)[1] ;
    }).join ('')) ;

    console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
      return device.encode ('__'+a)[2] ;
    }).join ('')) ;

We think if you keep on this trail you should be able to crack the code! You are expected to fill in the
`device.decode` function. Good luck ! General Patron is counting on you!

*/

/* It is known that:
  - The encoding function is related to:
      - the 'number' of the letter (a = 1, b = 2, c = 3...)
      - the length of the string to be encoded
      - the positioning of each letter in the message
  - Special characters are not encoded: they remain the same
  - The encoded string has the same length of the decoded one

  With that in mind, in order to decode we do the following:
    1 - For each letter in the alphabet, create a string of the same length of `message`, containing only the current letter
        and encode it. By doing that we can map what is the encoded value of that character for each position it appears in the message
    2 - With the dictionary, we grab each letter from `message` and its position, and search in our dictionary for the matching
        character found in the same position.
*/
device.decode = (message) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.? -'
  const dic = {}
  letters.split('').forEach(l => {
    let whatever = ''
    // Creating string with the same length of `message` but with only the current letter
    for (let i = 0; i < message.length; i++) {
      whatever += l
    }
    dic[l] = device.encode(whatever)
  })

  // For each char in message we need to find what letter in our dictionary contains the encoded character
  const res = message.split('').map((char, i) => Object.entries(dic).find(([, encoded]) => {
    return encoded[i] === char
  }))
  return res.map(row => row[0]).join('')
} 
