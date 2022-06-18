// // Given this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

const filterOutOdds = (...numbers) => numbers.filter((num) => num % 2 === 0);

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

let findMin = (...numbers) =>
  numbers.reduce((accum, next) => (accum < next ? accum : next));

//or

findMin = (...numbers) => Math.min(...numbers);

//   Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */
let nums = [3, 5, 3, 3, 2, 6];
const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  items.splice(idx, 1);
  return sitems;
};

/*  i don't understand this solution */
// const removeRandom = items => {
//   let idx = Math.floor(Math.random() * items.length);
//   return [...items.slice(0, idx), ...items.slice(idx + 1)];
// }

/** Return a new array with every item in array1 and array2. */
let colors = ["blue", "pink", "purple"];
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
let person = {
  name: "Diana",
  age: 22,
  born: "USA",
  state: "New York",
};
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = { ...obj };
  obj[key] = val;
  return newObj;
};
