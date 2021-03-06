/* console.log("First");
setTimeout(() => {
        console.log("Hello Number 1")
        setTimeout(() => {
                console.log("Hello Number 2")
                setTimeout(() => {
                        console.log("Hello Number 3")
                }, 500)
        }, 1000)
}, 2000)
console.log("Last"); */

/**
 * Rewritten example from above with Promise
 * @param {*} txt 
 * @param {*} delay 
 */

// Sequential

var myPromise = (txt, delay) => new Promise(function (resolve, reject) {
    setTimeout(function () {
      const err = false;
      if (err) {
        return reject(new Error("UPPPPPPPPS"))
      }
      resolve('Hello ' + txt);
    }, delay);
  });
  
  
  const results = [];
  myPromise("Number 1", 2000)
    .then(msg => {
      results.push(msg);
      return myPromise("Number 2", 2000)
    })
    .then(msg => {
      results.push(msg)
      return myPromise("Number 3", 2000)
    })
    .then(r => results.push(r))
    .catch(e => { console.log("In Catch", e) })
    .finally(() => console.log(results.join(", ")))


    /**
     *  Parallel
     */

    var myPromise = (txt, delay) => new Promise(function (resolve, reject) {
        setTimeout(function () {
          const err = false
          if (err) {
            reject(new Error("UPPPPS"))
          }
          resolve("Hello " + txt);
        }, delay);
      });
      
      const p3 = myPromise("Number 3", 1000)
      const p2 = myPromise("Number 2", 1000)
      const p1 = myPromise("Number 1", 2000)
      const promises = [p1, p2, p3]
      Promise.all(promises)
        .then(d => console.log(d.join(", ")))
        .catch(e => console.log("Error ",e))
        .finally(()=>console.log("DONE"))