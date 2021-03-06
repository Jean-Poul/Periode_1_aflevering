const simpleOS = require ('./simple-os-file');

console.log("*** Assignment 1 ***");

console.log(simpleOS);

console.log("*** Assignment 2 ***");

const DOS_Detector = require('./dosDetector');

const dos_dect = new DOS_Detector(1000); // Threshold for time 

dos_dect.on('DOS_Detector', (eventArg) => console.log('Event found an object with URL and time', eventArg));

dos_dect.addUrl('url 1');
dos_dect.addUrl('url 2');
dos_dect.addUrl('url 3');

setTimeout( ()=> dos_dect.addUrl('url 1'), 500);
setTimeout( ()=> dos_dect.addUrl('url 3'), 500);