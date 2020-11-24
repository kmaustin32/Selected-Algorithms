function binaryAgent(str) {
  let splitter = str.split(' ');
  let result = [];

  for (let i = 0; i < splitter.length; i++) {
    let carry = String.fromCharCode(parseInt(splitter[i], 2));
    result.push(carry);
  }
  return console.log(result.join(''));
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
