const makeSecureRandom = require('./ex_1_b')


// Plain promises
makeSecureRandom(9)
.then(res => console.log(res))


// Using async/await

const getWithAsync = async () => {
    try {
        console.log(await makeSecureRandom(21));
    } catch (err) {
        console.error('Error: ' + err);
    }
}

getWithAsync();