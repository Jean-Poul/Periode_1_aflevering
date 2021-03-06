const EventEmitter = require("events");
// const emitter = new EventEmitter();

var url = "https://jplm.dk";

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
      
        // Raised an event
        this.emit("messageLogged", { id: 1, url: "https://" });
      }
      
}

// function log(message) {
//   // Send an HTTP request
//   console.log(message);

//   // Raised an event
//   emitter.emit("messageLogged", { id: 1, url: "https://" });
// }

// exports an object
//module.exports.log = log;

// exports the function
//module.exports = log;

// exports logger class
module.exports = Logger;
