/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/


function rot13(str) { // LBH QVQ VG!
  let result = [];
  var code = 0;

  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);

    if(code >= 65 && code <= 77) {
      code = code + 13;
      code = String.fromCharCode(code);
      result.push(code);
      //console.log(code);
    } else if (code > 77 && code <= 90) {
      code = code - 13;
      code = String.fromCharCode(code);
      result.push(code);
      //console.log(code);
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}

// Change the inputs below to test

console.log(rot13("SERR PBQR PNZC"));
// Should return "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));
// Should return "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));
// Should return "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// Should return "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
//console.log();
