var numbers = [3, 56, 2, 48, 5];

//Map - create new Array by handling another array with a certain handling
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//Map with forEach
// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(double);
// console.log(newNumbers);

//Foreach with anonymous function
// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

//Map with anonymous function
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

//Filter - creating a new array by "filtering" the items that apply to the condition
// const newNumbers = numbers.filter(function (num) {
//   return num < 10;
// });
// console.log(newNumbers);

//Filter with forEach
//var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num < 10) newNumbers.push(num);
// });
// console.log(newNumbers);

//Reduce - creating a value by iterating through the array
// const newNumber = numbers.reduce(function (acc, currNum) {
//   return acc + currNum;
// });
// console.log(newNumber);

//Reduce with forEach
// var newNumber = 0;
// numbers.forEach(function (curr) {
//   newNumber += curr;
// });
// console.log(newNumber);

//Reduce with Step iteration
// const newNumber = numbers.reduce(function (acc, currNum) {
//   console.log("Accumulator: " + acc);
//   console.log("current Number: " + currNum);
//   return acc + currNum;
// });
// console.log(newNumber);

//Find - find the first number in array that applies to the condition
// const newNumber = numbers.find(function (num) {
//   return num < 10;
// });
// console.log(newNumber);

//FindIndex - find the first index of an array where the value applies to the condition
// const newNumber = numbers.findIndex(function (num) {
//   return num < 10;
// });
// console.log(newNumber);

//Square Function
// function square(x) {
//   return x * x;
// }

// const newNumbers = numbers.map(square);
// console.log(newNumbers);

//Square with anonymous function
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });
// console.log(newNumbers);

//Square Function with arrow function
const newNumbers = numbers.map((x) => x * x);
console.log(newNumbers);
