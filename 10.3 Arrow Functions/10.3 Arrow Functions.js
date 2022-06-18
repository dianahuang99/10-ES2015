function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
const numbers = [2, 3, 4, 5, 6];
const double = (arr) => arr.map((val) => val * 2);

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}
//if using more than one parameter use {}
//if using only one parameter don't have to use {}
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
//
// function squareAndFindEvens(numbers) {
//   var squares = numbers.map(function (num) {
//     return num ** 2;
//   });
//   var evens = squares.filter(function (square) {
//     return square % 2 === 0;
//   });
//   return evens;
// }

// const squareAndFindEvens = (numbers) =>
//   numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);
