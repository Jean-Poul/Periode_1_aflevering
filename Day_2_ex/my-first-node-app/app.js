// Part 1 modeles
//const log = require("./logger");

// Object call
// console.log('object');

//log("function message");

// Part 2 Path
const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);

// Part 3 OS

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total memory: ' + totalMemory);

// Template string (no need to concatination like above)
// ES6 / ES2015 : ECMAScript 6

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

// Part 4 File system

const fs = require("fs");

// Never use sync methods
// const files = fs.readdirSync('./');
// console.log(files)

// Async method
fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result ", files);
});


// Part 5 Event

// A class
const EventEmitter = require('events');
//const emitter = new EventEmitter();

// Register a listener (addEventlistener is the same as on)
// If I raise an event before a listener, nothing will happen
// emitter.on('messageLogged', function(eventArg) {
//     console.log('Listener called', eventArg)
// });
// With arrow function
//emitter.on('messageLogged', (eventArg) => console.log('Listener called', eventArg));

// Raised an event
// emitter.emit('messageLogged', { id: 1, url: 'https://' });

// Emit means making a noise or produce something
// Here we are making some 'noise' - we are signalling an event is happening

const Logger = require('./logger');
const logger = new Logger();

// With the class solution
logger.on('messageLogged', (eventArg) => console.log('Listener called', eventArg));


logger.log('message');

// Part 6 HTTP
// Remember http server has the EventEmitter functionality in node
const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([3, 6, 9]))
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');