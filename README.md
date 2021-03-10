**Gruppe Medlemmer**


- [Alexander Pihl](https://github.com/AlexanderPihl)
- [Jean-Poul Leth-Møller](https://github.com/Jean-Poul)
- [Mick Larsen](https://github.com/Micklarsen/)
- [Morten Rasmussen](https://github.com/Amazingh0rse)
- [Per Kringelbach](https://github.com/cph-pk)



# Læringsmål

## Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript-1

### Explain and Reflect:

# Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript-1

#
## Explain and Reflect:
- **Explain the differences between Java and JavaScript + node. Topics you could include:**

  - *Java is a compiled language and JavaScript a scripted language.*

  * Java is an object oriented programming language and JavaScript is an object based scripting language.*

  - *Java supports multithreading and JavaScript dont.*

  - *Java has a thread based approach to concurrenc where Javascript has event based approach to concurrency.*

  - *Java is a strongly typed language, which means that the user has to decide the data type of the variable before declaring and using it.
    Example an "int a" variable can only store the value of a type integer.*

    *JavaScript is a loosely typed language, which means that the user does not have to worry about the data-type of the variable before and after the declaration.
    Example a "var a" variable can store the value of any data-type.*

  - Blocking vs. non-blocking:
     *Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution. Java is a blocking type language where Javascript is not.*

- **Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.**
* - node.js is an open source server enviroment, runs on various platforms, uses JavaScript on the server and is a asynchronous programming language.*
 *npm is an online repository for the publishing of open-source Node.js projects and a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.*

- **Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers.**
-*The event loop continuously checks the call stack to see if there's any function that needs to run. While doing so, it adds any function call it finds to the call stack and executes each one in order.*
-*Heap - Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory*
-*Stack - This represents the single thread provided for JavaScript code execution. Function calls form a stack of frames.*
-*The event queue is responsible for sending new functions to the track for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.*
-*Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page, even block the UI thread, and the user cannot click around, scroll the page, and so on.
Almost all the I/O primitives in JavaScript are non-blocking. Network requests, Node.js filesystem operations, and so on. Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await.*
-*Browser or Web APIs are built into your web browser, and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. They are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code.*

- **What does it mean if a method in nodes API's ends with xxxxxxSync?**

If it ends with a suffix of "Sync", then it is synchronous.
If it's any kind of I/O operation and it accepts a callback and does not have "Sync", then it's asynchronous.
If there are two options offered and one ends with a suffix of "Sync", then the other one is asynchronous.
If it does not accept a callback or return a promise or use an eventEmitter (or something similar) to provide event notifications, then it is not asynchronous because there would be no way for it to communicate to you when it's done.


- **Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)**
A javascript engine executes JavaScript (JS) code. 

JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model.

In order to start coding in JavaScript, you don’t have to install any additional software. Each modern web browser comes with a JavaScript engine. You can simply run scripts you write inside your favorite browser.

The use of JavaScript engines is not limited to browsers. For example, the V8 engine is a core component of the Node.js and Deno runtime systems. 



  **What are the most important JavaScript engines?**

    Chrome V8 – As you probably guessed the engine shipped in Google Chrome. It’s an open source project written in C++. V8 is also used in Opera, NodeJS, and Couchbase.

    SpiderMonkey – The open source engine implemented in C++. It’s maintained by Mozilla Foundation. You can find it in Firefox.
  
    Nitro – The engine developed by Apple. It’s used in Safari.
  
    Chakra – Developed by Microsoft as the JavaScript engine for Edge browser.
  
  **JavaScript Runtime Environment**
In the web development, you don’t usually use the engine directly. The JavaScript engine works inside an environment, which provides additional features to your scripts that you can use at runtime.

These can be utility libraries or APIs which allow communicating with the world surrounding the engine. An example here might be access to information about the web browser in which your script is executed. Or a notification about a mouse click.
<br /><br />

- **Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.**

 - Babel:
    - JavaScript compiler that converts ECMAScript 2015+ into a backwards compatible version of JavaScript in current and older browsers or environments.
    - It does the following:
      - Transform syntax
      - Polyfill features that are missing in your target environment (through @babel/polyfill)
      - Source code transformations (codemods)

To make a babel file you write .babelrc or babel.config.json
**Example on how it would look like:**
 {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
*remember that babel transpile code and not compile*

[Example on babel](https://github.com/Jean-Poul/Periode_1_aflevering/blob/main/Flow_1/Day_4_ex/webpack-tutorial/babel.config.json)

  - Webpack:
-  is a module bundler that bundles your code into 1 or 2 files that you define. It also compiles TypeScript to JavaScript. You need a webpack config file to handle your configurations.
A webpack config file is written like: webpack.config.js. This file contains an entry point (where to start), an output(where to end and what to create). In between there are modules(rules for modules) and plugins(what to do with the overall code, the bundle).

 [Example on a webpack file](https://github.com/Jean-Poul/Periode_1_aflevering/blob/main/Flow_1/Day_4_ex/webpack-tutorial/webpack.config.js)


## **Explain using sufficient code examples the following features in JavaScript (and node)**

- **Variable/function-Hoisting**([Example in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/hoisting.js))
 - Hoisting (lifting up) means to lift a variable or a reference point to the top of the function scope.
  If there is no function it will be lifted to the top of the global scope.
  If you don't want to lift a variable make use of let of const, since it will stay in the blockscope (just like we know from java).
  A function will always be lifted to the top of the scope but if you have declared the function with a variable(reference point),
  the reference point will be lifted but not the function itself.
  The design rule for clean code when using var (before ES6) is to declare the variables at the top of the scope and the
  definitions(defined) at the bottom of the scope. Then there will be no confusion about when you can call a variable.

- **this in JavaScript and how it differs from what we know from Java/.net.**

#### **this**
A way to think about “this” is that in regular functions (with the function keyword or the object function short-hand), resolve to “the nearest object”, which is the object that they are bound to. For example:
[Explanation & example](https://github.com/cph-pk/4sem-Fullstack-Flow1/blob/main/Day-1/JavaScriptEx_day1/day1-ex-this.js)

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.
In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).


- **Function Closures and the JavaScript Module Pattern**([Example in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/closures.js))
  - Closure is a special kind of object which stores variables who has been terminated, so function further in the scope (childs) can make 
  use of the variables. The closure combines two things - a function and the environment in which
  the function was created. The environment consists of any local variables that
  were in-scope at the time that the closure was created.
  Functions in JavaScript form closures.


- **User-defined Callback Functions (writing functions that take a callback)**

- **Explain the methods map, filter and reduce**
    
    #### **.map()**
    *creates a new array by taking 2 arguments, a callback and an optional context (which will be referred to as ```this``` in the callback). The callback runs for each value in the array, and returns each new value in the new array.
    Parameter details.
    callback − Function that produces an element of the new Array from an element of the current one.
    thisObject − Object to use as this when executing callback.*

    [Example of .map method being used line 71-80](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/day1/JavaScriptEx_day1/myFilter.js)
 
  #### **.filter()**
  filter() method creates a new array with all elements that pass the test implemented by the provided function.

     [Example of .map method being used line 21-22](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/day1/JavaScriptEx_day1/myFilter.js)

  #### **.reduce()**
  *Applies a function against two values of an array, and reduces it to a single value*

  *The reducer function takes four arguments:
  Accumulator
  Current Value
  Current Index
  Source Array
  Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.*

  [Example of .reduce method being used line 67-74
  ](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/day1/JavaScriptEx_day1/reduce.js)
  - **Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)**
 - [make-it-modular.js](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/make-it-modular.js)
  - [mymodule.js](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/mymodule.js)


- **Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,   maps/sets etc.**

  #### **let**
```let``` allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.
  ```
  {
    let x = 2;
  }
  // x can NOT be used here 
  ```
  #### **arrow function**
The arrow function is alternative to the way you normally write a function
```
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

```

  #### **this**
A way to think about “this” is that in regular functions (with the function keyword or the object function short-hand), resolve to “the nearest object”, which is the object that they are bound to. For example:
[Explanation & example](https://github.com/Amazingh0rse/FullstackHandin1/tree/main/day1/JavaScriptEx_day1/day1-ex-this.js)
  #### **rest parameters**
Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.
```
function functionname[...parameters]//... is the rest parameter
{
statement;
}

// es6 rest parameter
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15  
```
  #### **destructuring objects and arrays**
Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.
  ```
  // Before ES6
  let introduction = ["Hello", "I" , "am", "Sarah"];
  let greeting = introduction[0];
  let name = introduction[3];

  console.log(greeting);//"Hello"
  console.log(name);//"Sarah"

  // Basic Array Destructuring
  let introduction = ["Hello", "I" , "am", "Sarah"];
  let [greeting, pronoun] = introduction;

  console.log(greeting);//"Hello"
  console.log(pronoun);//"I"

  // We can also do this with the same result.
  let [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

  console.log(greeting);//"Hello"
  console.log(pronoun);//"I"
  ```
  #### **maps/sets**
  **sets**
  A collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Sets collection.
  ```
  // To initialize a set, we can pass an array of values to
  // the Set constructor, this will create a Set with those values:

  const confectioneries = new Set(['oreo', 'marshmallow','oreo', 'kitkat', 'gingerbread']);

  console.log(confectioneries); // result: Set { 'oreo', 'marshmallow', 'kitkat', 'gingerbread' }

  // In the snippet above, the duplicate value “oreo” is quietly removed from the Set and only unique values are returned.
  ```
  **maps**
  The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
  ```
  // create a Map using the Map constructor
  const users = new Map();

  console.log(users); // Map {}
  ```
  Key-value pairs are added to a Map using the set() method. This method takes in two arguments, the first being the key and the second, the value, which is referenced by the key
  ```
  // Adding items
  users.set('John Doe', {
  email: 'johndoe@example.com',
  });

  users.set('Jane Doe', {
	email: 'janedoe@example.com',
  });

  console.log(users);

  /__ console.log result
  Map {
	'John Doe' => { email: 'johndoe@example.com'},
	'Jane Doe' => { email: 'janedoe@example.com'} }
  __/
  ```
<br>

- **Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.**
[Example on inheritance](https://github.com/Jean-Poul/Periode_1_aflevering/blob/main/Day_5_ex/TypeScript_exercises/src/inheritance.ts)

- **Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events**

## **ES6,7,8,ES-next and TypeScript**

- **Provide examples with es-next, running in a browser, using Babel and Webpack**

- **Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**

- **Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics**

- **Explain how we can get typescript code completion for external imports.**

- **Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)**
TC39 or the 39nth Technical Committee by its full name, is a group under ECMA International containing ECMA members - which are JavaScript developers, implementers, academics and more; from various companies and institutions. The committee collaborates with the community to maintain and evolve the definition of the ECMAScript specification.

The committee meets regularly with a neat agenda, in order to plan and make decisions regarding the specification. It’s worth mentioning that the decisions are made by consensus, meaning most of the members should agree when nobody extremely disagrees or veto.

####**The T39 Process**
The process of making changes in the ECMAScript specification is done by the TC39, and naturally called the TC39 process. This process is built from five stages, starting with stage zero. Any proposal for a change in the specification goes through these stages without exception, when the committee must approve the progress from one stage to the next one.
The process was born due to the conduct of ECMAScript 2015 edition, also known as ES6, which was a pretty huge release lasting very long without delivery (actually almost 6 years). Therefore, as of ECMAScript 2017, the editions have become smaller and are delivered every year, containing all proposals which are accepted at all stages of the process, since the previous edition.
####**Stages**
**Stage 0 - Strawperson**
This is the first stage, called “Strawperson”, representing an initial idea for addition or change to the specification that isn’t considered as a formal proposal. Suggestions for this stage must come from a TC39 member or registered contributor.
**Stage 1 - Proposal**
This stage is a formal proposal that describes a discrete problem or general need, suggests a shape of the solution and points out potential challenges - such as “cross-cutting” concerns with other features or complex implementation. The solution’s description should contain a high-level API with concrete examples; and also discuss algorithms, abstractions and semantics.
On top of that, one of the TC39 members is defined as the owner that is responsible to advance the proposal, and practically named champion. Typically the champion is the original author of the proposal, but not always. If the proposal meets the criteria of stage 1, and hereby representing the committee’s will of going forward with the proposal, then it moves to the draft stage.
**Stage 2 - Draft**
This stage is the initial draft of the proposal in the specification, phrased by the ECMAScript language.
The draft should describe the syntax, semantics and APIs precisely as much as possible, although it can have “TODO” comments or placeholders. An experimental implementation is also needed, runnable by a browser or a build-time transpiler like Babel.
Moving forward from this stage means that the committee expects that the proposal would be developed and included eventually in the official specification - when only incremental changes (and mostly fixes) are expected.
**Stage 3 - Candidate**
This stage is a candidate proposal that’s almost final - but ready for feedback and refinements from implementations and users. The proposal defined as completely final when there is neither further work with the specification nor external feedback.
All ECMAScript editors and designated reviewers should sign off on this specification. In addition, it should include two independent spec-compatible implementations passing the acceptance tests.
After this stage, changes would be made only for critical issues.
**Stage 4 - Finished**
This is the last stage, called “finished” obviously, indicating that the proposal is ready to be included in the latest draft of the specification - and be delivered with its next edition.

**Summary**
The ECMAScript specification evolves every year through the TC39 process.
Key points to remember:
TC39 is a diverse group of members working with JavaScript under ECMA International
TC39 collaborates with the community to maintain and evolve the ECMAScript specification
The TC39 process allows making changes in the ECMAScript specification using five regulated stages
TC39 must approve each stage of the TC39 process for any change in the specification
New editions of the specification are delivered every year
Stage 0 represents an initial idea for addition or change to the specification
Stage 1 is a formal proposal describing a problem and suggesting a proper solution
Stage 2 is an initial draft of the proposal specification
Stage 3 represents the draft when it’s almost final but ready for last feedback
Stage 4 is when the proposal specification completely ready and included within the next edition



## **Callbacks, Promises and async/await**
**Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:**

- **Example(s) that demonstrate how to implement our own promise-solutions.**

- **Example(s) that demonstrate error handling with promises**
[Example of error handling](https://github.com/Jean-Poul/Periode_1_aflevering/blob/main/Flow_1/Day_3_ex/ex-from-school/filterdir.js)
*just remember (resolve, reject) and then().catch()*

- **Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**

**Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.**

**Provide examples to demonstrate**
- **Why this often is the preferred way of handling promise**
 
-  **Error handling with async/await**
[Example of async/await](https://github.com/Amazingh0rse/FullstackHandin1/blob/main/day3/exercises/ex1-d.js)

- **Serial or parallel execution with async/await.**


[Example of async/wait with serial and parralel](https://github.com/Jean-Poul/Periode_1_aflevering/blob/main/Flow_1/Day_3_ex/ex-from-school/makeFolders.js)

