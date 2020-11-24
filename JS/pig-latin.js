/*


Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
  let regex = /[aeiou]/i;

  if (str[0].match(regex)) {
    return str.concat('way');
  } else if (str.match(regex) == null) {
    return str.concat('ay');
  } else {
    let vowelPlace = str.indexOf(str.match(regex));
    let frontHold = str.slice(0, vowelPlace).concat('ay');
    let backHold = str.slice(vowelPlace);
    return backHold.concat(frontHold);
    console.log(frontHold);
  }
}

translatePigLatin("consonant");
