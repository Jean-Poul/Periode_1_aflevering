// A promise is async so they are good to use when you need to do something that takes a long time to do (non-blocking)
// A promise is very simular to a callback but a bit cleaner
// A promise helps with not getting into what is known as callback hell (callback within a callback within another callback and so on)
// A promise takes a function with two parameters, resolve(.then()) and reject(.catch())
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a == 2) {
    // What we want to do when the promise succeeds
    resolve("Success");
  } else {
    // What we want to do when the promise fails
    reject("Failed");
  }
});

//The promise made in line 2
p
  // The resolved values from the promise. Then() takes a method
  .then((message) => {
    // Do this when the promise succeeds
    console.log("This is in the then " + message);
  })
  // The reject, which is the error from the promise. Catch() takes a method
  .catch((message) => {
    // Do this when the promise fails
    console.log("This is in the catch " + message);
  });

// Example using callbacks
// Function taking to callbacks, one for a success and one for an error
function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingCatMeme = false;

  // Checks if either variables are true, if one of them are, it will throw and error
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":("
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat"
    }); // If neither of the variables are true it will run the success callback
  } else {
    callback("Thumbs up and Subscribe");
  }
}

// Send two callbacks to the function
// First callback is for successes and the second for an error
watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

// Using promises instead of callbacks with the example above
function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;

  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":("
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat"
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });



// Things we can do with promises
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});


// .all() makes the code run in parallel and we don't have to wait for one promise to finish before the next can run
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
.then(
  (messages) => {
    console.log(messages);
  }
);

// If we want to do something as soon one promise is resolved use .race()
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
