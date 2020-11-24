//Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
let emptyArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var substeamrolledArray = steamrollArray(arr[i]);
      emptyArray = emptyArray.concat(substeamrolledArray);
    } else {
      emptyArray.push(arr[i]);
    }
  }
  return emptyArray;
}

console.log(steamrollArray([1, [2, 3], [{}]]));
