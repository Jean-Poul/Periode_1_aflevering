// Closure examples for the exam
//----------------------------------------------------------------------------------

/*
Closure is a special kind of object which stores variables who has been terminated, so function further in the scope (childs) can make 
use of the variables. The closure combines two things - a function and the environment in which
the function was created. The environment consists of any local variables that
were in-scope at the time that the closure was created.
Functions in JavaScript form closures.
*/

//----------------------------------------------------------------------------------
// Assignment 1)
console.log("*** Assignment 1 ***");
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
Short example from Mozilla:
*/
// Example 1
function makeFunc() {
  var name = "Mozilla"; // name is a local variable

  function logName() {
    // logName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  return logName;
}

var myFunc = makeFunc();
myFunc();

//----------------------------------------------------------------------------------
// Example 2
// Remember you can Module.export and import(require('')) when using node
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return { // Returns an object
    inc: () => { // Setter
      changeBy(1);
    },
    dec: () => { // Setter
      changeBy(-1);
    },
    value: () => { // Getter
      return privateCounter;
    }
  };
};
var counter1 = makeCounter(); // instance of object
var counter2 = makeCounter();
counter1.inc();
counter1.inc();
counter2.inc();
console.log(counter1.value());
console.log(counter2.value());

//----------------------------------------------------------------------------------
// Assignment 2)
console.log("*** Assignment 2 ***");
var fetchPerson = function () {
  var personAge;
  var personName;

  function changeAge(val) {
    personAge = val;
  }

  function changeName(val) {
    personName = val;
  }

  return {
    setAge: (a) => {
      changeAge(a);
    },
    setName: (n) => {
      changeName(n);
    },
    getInfo: () => {
      return `${personName}, ${personAge}`;
    }
  };
};

var person1 = fetchPerson();
var person2 = fetchPerson();
person1.setAge(54);
person1.setName("King Kong");
person2.setAge(76);
person2.setName("Gandalf");
console.log(person1.getInfo());
console.log(person2.getInfo());

//----------------------------------------------------------------------------------
// Assignment 3)
console.log("*** Assignment 3 ***");
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  show = function () {
    console.log(`${this._name}, ${this._age}`);
  };
}

const p1 = new Person("Svend", 70);
const p2 = new Person("Peter", 9);
p1.show();
p2.show();

//Look at 'this' assignment for getter and setter if needed for a class

/**
 * Extra example
 */

console.log("*** Extra example ***");

const name = "J-P";

function printName() {
  console.log(name);
}

printName();

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer variable: " + outerVariable);
    console.log("Inner variable: " + innerVariable);
  };
}

const newFunction = outerFunction("Outside");

newFunction("Inside");
