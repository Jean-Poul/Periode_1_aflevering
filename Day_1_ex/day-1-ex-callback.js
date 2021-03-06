// Callback examples
console.log("*** Callback examples ***");
console.log("*** First example ***");
let x = function () {
  console.log("I am called from inside a function");
};

let y = function (callback) {
  console.log("Do something");
  callback();
};

y(x);

console.log("*** Second example ***");

let add = function (a, b) {
  return a + b;
};

let multiply = function (a, b) {
  return a * b;
};

let doWhatever = function (a, b) {
  console.log(`here are your two numbers back ${a} and ${b}`);
};

let calc = function (num1, num2, callback) {
  return callback(num1, num2);
};

// console.log(calc(2, 3, add));
// anonymous function good when only used once in code
console.log(
  calc(2, 3, function(a, b) {
    return a - b;
  })
);

//Excercise 1
console.log("*** Ex 1 ***");
const array = ["Alex", "Per", "Morten", "Mick", "J-P"];

function myCallback(arr) {
  let callbackArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      callbackArray.push(arr[i]);
    }
  }
  console.log(callbackArray);
}

function myFilter(arr, callback) {
  callback(arr);
}

myFilter(array, myCallback);

//with the array filter() method
const newArray = array.filter((value) => value.length > 4);

console.log(newArray);

// Other filter example
// filter method takes a callback with value, index and array (only using value here)
const numbersFilter = [1, -1, 2, 3];
// Loops throu all elements and adds them to a new array
const numFiltered = numbersFilter.filter(function(value){
  return value >= 0;
});
console.log(numFiltered);
// map function example with filter. Map function takes a callback with value, index and array (only using value here)
const items = numFiltered.map(n => '<li>' + n + '</li>');
console.log(items);

// If i want to map a value to an object
// const items = numFiltered.map(n => {
//   const obj = { value: n };
//   return obj
// });

// If i want to chain methods
// const items = numFiltered
//   .filter(n => n >= 0)
//   .map(n => ({ value: n}))
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value);
// console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html); 



//Excercise 2
console.log("*** Ex 2 ***");
const numbers = [1, 2, 3, 4, 5];

function MyMapCallback(arr) {
  const test = [];
  for (let i = 0; i < arr.length; i++) {
    test.push(arr[i] + 1);
  }
  console.log(test);
}

function myMap(arr, callback) {
  callback(arr);
}

myMap(numbers, MyMapCallback);

//with the array map() method
const newMapArray = numbers.map((n) => n + 1);

console.log(newMapArray);

//Excercise 3
console.log("*** Ex 3 ***");
console.log("Filter prototype: ");

//Prototype with filter

Array.prototype.myFilterP = function () {
  let callbackArray = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 4) {
      callbackArray.push(names[i]);
    }
  }
  console.log(callbackArray);
};

let names = ["Lars", "Peter", "Jan", "Bo"];

names.myFilterP();

//Prototype with map

console.log("Map prototype: ");
Array.prototype.MyMapP = function () {
  const test = [];
  for (let i = 0; i < numbers.length; i++) {
    test.push(numbers[i] * 2);
  }
  console.log(test);
};

numbers.MyMapP();


// reduce method example
console.log('*** reduce example ***');
const numbReduce = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbReduce)
// sum += n;

// console.log(sum);

// A more elegant way of writting it is with reduce
// Takes a callback function with two parameters
// Accumulator is like the sum I have above and the currentValue is for each element/value
// acc = 0, cur = 1 => 1
// acc = 1, cur = -1 => 0
// acc = 0, cur = 2 => 2
// acc = 2, cur = 3 => 5
const sum = numbReduce.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0) // Initializing accumulator to 0

console.log(sum);