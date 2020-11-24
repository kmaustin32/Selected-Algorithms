/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/



function addTogether(...args) {
  let argList = args;

  console.log(`args:${JSON.stringify(args)}`);
  if (argList.every(item => typeof item == 'number') && argList.length == 2) {
    return argList[0] + argList[1];
  } else if (argList.every(item => typeof item == 'number') && argList.length == 1){
    let intermediate = argList[0];
    return function(num) {
      if (typeof num == 'number') {
        return intermediate + num;
      } else {
        return undefined;
      }
    }
  } else {
    return undefined;
  }
}

console.log("output:" + addTogether(2.5));
console.log("output:" + addTogether("http://bit.ly/IqT6zt"));
f = addTogether(1);
console.log("output:" + f(3));
console.log("output:" + f(6));
console.log("output:" + JSON.stringify(addTogether(2)(3)));


console.log("output:" + JSON.stringify(23));
