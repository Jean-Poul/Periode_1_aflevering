//const fs = require('fs')

//var contents = fs.readFileSync(process.argv[2])
//var lines = contents.toString().split('\n').length - 1
//console.log(lines)



console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1)