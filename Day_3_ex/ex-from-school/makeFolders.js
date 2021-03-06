/* const fs = require("fs")
 
for (let i = 1; i < 6; i++) {
  fs.mkdirSync(`Folder${i}`)
  fs.writeFileSync(`Folder${i}/file${i}.js`, "console.log('HI')")
}

 */

const { filterDirMyPromise } = require("./filterdir");

async function testerP() {
  try {
    const files = await filterDirMyPromise(__dirname, ".js");
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}

testerP();

async function testerSequential() {
    try {
        const p1 = await filterDirMyPromise("Folder1", ".js");
        const p2 = await filterDirMyPromise("Folder2", ".js");
        const p3 = await filterDirMyPromise("Folder3", ".js");
        const p4 = await filterDirMyPromise("Folder4", ".js");
        const p5 = await filterDirMyPromise("Folder5", ".js");
        console.log("Sequential: " + [p1, p2, p3, p4, p5]);
    } catch (err) {
        console.error(err);
    }
}

async function testerParallel() {
    try {
        const p1 = filterDirMyPromise("Folder1", ".js");
        const p2 = filterDirMyPromise("Folder2", ".js");
        const p3 = filterDirMyPromise("Folder3", ".js");
        const p4 = filterDirMyPromise("Folder4", ".js");
        const p5 = filterDirMyPromise("Folder5", ".js");
        const allResults = await Promise.all([p1, p2, p3, p4, p5]);
        console.log("Parallel: " + allResults);
    } catch (err) {
        console.error(err);
    }
}

testerSequential();
testerParallel();