// async/await makes promises easier to work with and is called syntactical sugar

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing reponse");
    resolve(`Extra information + ${response}`);
  });
}

/* makeRequest('Google')
.then( response => {
    console.log('Response received')
    return processRequest(response)
})
.then( processedResponse => {
    console.log(processedResponse)
})
.catch( err => {
    console.log(err)
}) */

// Using async/await
async function doWork() {
    // Using try/catch instead of .catch to catch any errors
  try {
    // await says that the code should wait until makeRequest is finished and then afterwards it will execude the next things
    const response = await makeRequest("Google");
    console.log("Response received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err)
  }
}

// The code above looks like synchronize code but is asynchronize and easier to read
// async most be wrapped in a function with the async keyword at the beginning
// await before all the code that is going to be asynchronize otherwise it will just return the promise and not the resolve of that promise being executed

doWork();
