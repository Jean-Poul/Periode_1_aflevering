const crypto = require('crypto');

const randomStrings = {
    "title": "6 Secure Randoms",
    "randoms": [
        { "length": 48, "random": "A string with 48 random hex-characters" },
        { "length": 40, "random": "A string with 40 random hex-characters" },
        { "length": 32, "random": "A string with 32 random hex-characters" },
        { "length": 24, "random": "A string with 24 random hex-characters" },
        { "length": 16, "random": "A string with 16 random hex-characters" },
        { "length": 8, "random": "A string with 8 random hex-characters" }
    ]
}

console.log('*** Exercise: a) ***')
console.log('*** 1 ***')
function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buffer) => {
            const hexVal = buffer.toString("hex");
            if (err) {
                reject(err);
            }
            resolve(hexVal);
        });
    });
}

Promise.all([randomStrings.randoms.forEach(elem => {
    makeSecureRandom(elem.length)
        .then((message) => {
            elem.random = message;
           // console.log(elem)
            //console.log(randomStrings)
        })
        .catch((err) => {
            console.error("Error: " + err);
        });
})])

// Random string object gets printet first because makeSecureRandom is async
//console.log(randomStrings);


console.log('*** 2 ***');

function test() {
    console.log(randomStrings)
}

setTimeout(test, 5000)

module.exports = makeSecureRandom;
