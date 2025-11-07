import emojipedia from "./emojipedia.js";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
console.log(
  numbers.map(function (number) {
    return number * 2;
  })
);
//Filter - Create a new array by keeping the items that return true.

console.log(
  numbers.filter(function (number) {
    return number > 10;
  })
);

//Reduce - Accumulate a value by doing something to each item in an array.

console.log(
  numbers.reduce(function (sum, number) {
    return (sum += number);
  })
);

//Find - find the first item that matches from an array.

console.log(
  numbers.find(function (number) {
    return number > 10;
  })
);

//FindIndex - find the index of the first item that matches.

console.log(
  numbers.findIndex(function (number) {
    return number > 10;
  })
);


console.log(
  emojipedia.map(function (entry) {
    return entry.meaning.substring(0, 100);
  })
);
