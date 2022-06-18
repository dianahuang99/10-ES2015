// Quick Question #1
// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);
//a set that contains 1,2,3,4

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("");
//'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

function hasDuplicate(arr) {
  let numSet = new Set(arr);
  let numSetString = [...numSet].join("");
  let arrString = arr.join("");
  if (numSetString !== arrString) return true;
  else return false;
}

//const hasDuplicate = arr => new Set(arr).size !== arr.length

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
  let lowerCaseStr = str.toLowerCase();
  let strArray = Array.from(lowerCaseStr);
  let vowelArray = strArray.filter((letter) => "aeiou".indexOf(letter) !== -1);
  let vowelMap = new Map();
  vowelArray.forEach(function (vowel) {
    if (vowelMap.has(vowel) === false) {
      vowelMap.set(vowel, 1);
    } else if (vowelMap.has(vowel)) {
      vowelMap.set(vowel, vowelMap.get(vowel) + 1);
    }
  });
  return vowelMap;
}

// function isVowel(char){
//     return "aeiou".includes(char);
//   }

//   function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//       let lowerCaseChar = char.toLowerCase()
//       if(isVowel(lowerCaseChar)){
//         if(vowelMap.has(lowerCaseChar)){
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//         } else {
//           vowelMap.set(lowerCaseChar, 1);
//         }
//       }
//     }
//     return vowelMap;
//   }
