/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

  let roman = [];
  let romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  while (num > 0) {
    if (num >= 1000) {
      roman.push(romanArray[0]);
      num -= 1000;
    } else if (num >= 900) {
      roman.push(romanArray[1]);
      num -= 900;
    } else if (num >= 500) {
      roman.push(romanArray[2]);
      num -= 500;
    } else if (num >= 400) {
      roman.push(romanArray[3]);
      num -= 400;
    } else if (num >= 100) {
      roman.push(romanArray[4]);
      num -= 100;
    } else if (num >= 90) {
      roman.push(romanArray[5]);
      num -= 90;
    } else if (num >= 50) {
      roman.push(romanArray[6]);
      num -= 50;
    } else if (num >= 40) {
      roman.push(romanArray[7]);
      num -= 40;
    } else if (num >= 10) {
      roman.push(romanArray[8]);
      num -= 10;
    } else if (num >= 9) {
      roman.push(romanArray[9]);
      num -= 9;
    } else if (num >= 5) {
      roman.push(romanArray[10]);
      num -= 5;
    } else if (num >= 4) {
      roman.push(romanArray[11]);
      num -= 4;
    } else {
      roman.push(romanArray[12]);
      num -= 1;
    }
  }
  return roman.join('');
}

console.log(convertToRoman(36));
console.log(convertToRoman(9));
console.log(convertToRoman(44));
console.log(convertToRoman(400));
console.log(convertToRoman(1006));
