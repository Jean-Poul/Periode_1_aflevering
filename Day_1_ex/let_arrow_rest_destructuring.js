// let vs var
// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

// use const mostly and only use let when you have to change a value like when you have to iterate (for loop) then use let.
console.log("*** const/let vs var ***");
/* function start() {
    for (let i = 0; i < 5; i++) // change let to var and see the change
        console.log(i);
    
        console.log(i);
}

start() */

/* function start() {
    for (let i = 0; i < 5; i++) {
        if (true) {
            var color = 'red' // change var to let and see the change
        }
    }
        console.log(color);
}

start() */

// Another example of scopes and how you can redeclare var but not let/const

/* if (true) {
    var varVariable = 'This is true'
}

//var varVariable = 'This is false'

console.log(varVariable);

if (true) {
    let letVariable = 'This is true'
    // console.log(letVariable);
}
 // let letVariable = 'This is true'
 // let letVariable = 'This is false'
console.log(letVariable); */

// Difference between let and var example
// You can not change the value of a const
/* let letVar = 1;
const constVar = 1;

letvar = 2;
constVar = 2; // error */

// but you can change the properties of a const
/* const constObj = {name: 'Bob'};

constObj.name = 'Changed';

console.log(constObj); */

// Global scope
// Explain how var gets attached to the window object which can be a problem. Ex: could be that you use
// a 3rd party library and that library has a var named color. Now the var will be overwritten.
// Let does not get attached to the window object and will show undefined in the browser console.
/* var color = 'red';  // window.color will show red
let age = 30; // window.age will show undefined

function sayHi() { // this function will be a part of the window object (window.sayHi() and is bad practice)
    console.log('Hi teachers');
} */

console.log("*** arrow function ***");

/* function sum(a ,b) {
    return a + b;
}

const sum2 = (a ,b) => a + b


function isPositive(number) {
    return number >= 0;
}

const isPositive2 = number => number >= 0

function randomNumber() {
    return Math.random;
}

let randomNumber2 = () => Math.random

// Anonymous function
document.addEventListener('click', function() {
    console.log('Click');
})

document.addEventListener('click', () => console.log('Click')) */

// Arrow function also redefines the .this keyword
console.log("*** Arrow function with .this example ***");
/* 
class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => { // this is not redefined with an arrow function so this will be the same as where the function is defined
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () { // redefines this from where it is called
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new Person('Bob');

person.printNameArrow();
person.printNameFunction();
console.log(this.name); // shows nothing. this is not defined in the global scope
 */

// ...spread operator and rest operator
console.log("*** Spread operator and rest operator example ***");
/* 
const arrOne = [4, 5, 6];

const arrTwo = [1, 2, 3, ...arrOne, 7, 8, 9]; 
// if you didnt use the spread operator, which is the 3 dots, then there would be
// an array within another array but with the spread operator you insert the elements of the first array

console.log(arrTwo); */

// Example with a function
/* 
function addThreeNumbers(a, b, c) {
    console.log(a + b + c);
}

const args = [0, 1, 2]; // if you add a fourth number that number will be ignored since the function only takes 3 arguments
addThreeNumbers(...args);
 */
// Copy arrays

/* const arr = [1, 2, 3];
const arrTwo = [...arr];

arrTwo.push(4);

console.log(arr);
console.log(arrTwo); */

// concatenate arrays
/* let arr = [1, 2, 3];
const arrTwo = [4, 5, 6];
// you could do arr.concat(arrTwo) but with spread operator
arr = [... arr, ...arrTwo] // here you could add someting inbetween the arrays, so gives a bit more flexibility compared to conate()
console.log(arr); */

// Rest operator is basicly the opposite of the spread operator. Spread spreads the elements
// while rest condense multiple elements into an array
/* function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); */

// Destructuring arrays and objects
// The idea with destructuring is to take an object or array and convert it into smaller objects, smaller arrays or smaller elements
/* const alphabet = ['A', 'B', 'C', 'D']
const numbers = ['1', '2', '3', '4']

// old and clumsy way to do it
//const a = alphabet[0]
//const b = alphabet[1]

// with destructuring
//const [a, b] = alphabet
const [a,, c, ...rest] = alphabet

console.log(a);
//console.log(b);
console.log(c);
console.log(rest);


function sumAndMultiply(a, b) {
    return [a+b, a*b, a/b]
}

// const array = sumAndMultiply(2, 3);
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);

// console.log(array);
console.log(sum);
console.log(multiply);
console.log(division); */

// Destructuring with objects
// With object its not based on the position but rather the key (property name)

const person = {
    name: 'J-P',
    age: 36,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Bob',
    favoriteFood: 'Watermelon'
    // age: 27,
    // address: {
    //     city: 'Somewhere else',
    //     state: 'Another one of them'
    // }    
}

// const { name: firstName, age, favoriteFood = 'Rice' } = personTwo
// const { name: firstName, ...rest } = personTwo
// const { name: firstName, address: { city } } = personTwo

// if person has the same property as personTwo, personTwo will overwrite person
//const personThree = {... person, ...personTwo}

// console.log(firstName);
// console.log(age);
// console.log(favoriteFood);

// console.log(rest);

// console.log(city);

//console.log(personThree);

function printUser({ name, age, favoriteFood = 'Watermelon'}) {
    console.log(`Name is: ${name}. Age is: ${age}. Food is: ${favoriteFood}.`);
}

printUser(person)