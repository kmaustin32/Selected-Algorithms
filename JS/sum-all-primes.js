/* 
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

function sumPrimes(num) {
  
  var result = 0;

  for (num; num > 1; num--) {
    if (isPrime(num) == true) {
      result+=num;
    }
  }
  return result;
}


function isPrime(num) {
  for (let p = 2; p < num; p++) {
    if (num % p == 0) {
      return false;
    }
  }
  return true;
}


console.log(sumPrimes(10));
