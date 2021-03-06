const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);

function filterDir(path, ext, cb) {
  fs.readdir(path, (err, b) => {
    if (err) {
      cb(err);
    }
    const filtered = b.filter((f) => f.endsWith(ext));
    cb(null, filtered);
  });
}

function filterDirMyPromise(path, ext) {
  return new Promise((resolve, reject) => {
    filterDir(path, ext, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
}

function filterDirP(path, ext) {
  return readdir(path) // Return her fordi ellers bliver det undefined
    .then((files) => {
      const filtered = files.filter((f) => f.endsWith(ext));
      return filtered; // Når man returner i en then bliver det til en promise
    });
}

filterDirP(__dirname, ".js")
  .then((files) => console.log(files))
  .catch((e) => console.error(e));

// Viser i cmd hvad der bliver exportet
console.log(module);

// Får fra node
console.log(module.exports);

// Object
module.exports.filterDir = filterDir;
module.exports.filterDirP = filterDirP;
module.exports.filterDirMyPromise = filterDirMyPromise;
// Er det samme som første export
// module.exports = { filterDir: filterDir }

// Det jeg exporter selv
console.log(module.exports);

// Function
// module.exports = filterDir;
