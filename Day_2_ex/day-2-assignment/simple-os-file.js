const os = require('os');

let clientInfo = {
    platform: os.platform(),
    osType: os.type(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    EOL: os.EOL
};

module.exports = clientInfo;
//console.log(module);