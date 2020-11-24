/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/



function truthCheck(collection, pre) {
let master = collection;
let counter = [];

  for (let i = 0; i < master.length; i++) {
    if (master[i][pre] == true) {
      counter.push(true);
    }
  }

  if (counter.every(item => item == true)) {
    return true;
  }
  return false;
}



console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

/*
    if (master.every(item => item.pre)) {
      return true;
    }
    return false;
*/

function truthCheck(collection, pre) {

  let result = collection.every(item => item.hasOwnProperty(pre) && item[pre]);

  return result;

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
