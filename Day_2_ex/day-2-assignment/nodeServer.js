const http = require('http');
const simpleOS = require ('./simple-os-file');

const DOS_Detector = require('./dosDetector');
const dos_dect = new DOS_Detector(1000); // Threshold for time 

const portNr = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(simpleOS));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  console.log('client-IP: ' + sock.remoteAddress);
});

server.listen(portNr);
console.log(`listening on ${portNr}`);
//Register for the "DosDetected" event and console.log the url and time info.
dos_dect.on('DOS_Detector', (eventArg) => console.log('Event found an object with URL and time', eventArg));

dos_dect.addUrl('http://1');
dos_dect.addUrl('http://2');
dos_dect.addUrl('http://3');

setTimeout( ()=> dos_dect.addUrl('http://1'), 300);
setTimeout( ()=> dos_dect.addUrl('http://3'), 600);


