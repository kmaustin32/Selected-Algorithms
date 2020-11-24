/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2"
*/

function palindrome(str) {

  let result = [];
  let palString = str.split('');
  //console.log(`palString:${palString}`);
  for (let i = 0; i < palString.length; i++) {
    if (palString[i].match(/[a-z]/gi)) {
      result.push(palString[i]);
    } else if (palString[i].match(/\d/)) {
      result.push(palString[i]);
    }
  }
  result = result.join('').toLowerCase();
  //console.log(`result:${result}`);

  let reversed = result.split('').reverse().join('');
  //console.log(`reversed:${reversed}`);

  for (let j = 0; j < result.length; j++) {
    if (result[j] != reversed[j]) {
      return false;
    }
  }
  return true;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("almostomla"));
console.log(palindrome("_eye"));
console.log(palindrome("1 eye for of 1 eye."));
