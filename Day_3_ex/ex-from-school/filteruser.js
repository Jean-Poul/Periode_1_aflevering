// Curly brackets da det er et object
// Destructuring er også involveret
const { filterDir, filterDirP, filterDirMyPromise } = require("./filterdir");

filterDir(__dirname, ".js", (err, files) => {
  if (err) {
    return console.log(err);
  }
  console.log(files);
});

async function tester() {
  const files = await filterDirP(__dirname, ".js");
  console.log(files);
}

tester();

filterDirMyPromise(__dirname, '.js')
.then(files => console.log(files))
.catch(e => console.log(e))

async function testerP() {
    try {
    const files = await filterDirMyPromise(__dirname, ".js");
    console.log(files);
    } catch (err) {
        console.error(err);
    }
  }

  testerP()

