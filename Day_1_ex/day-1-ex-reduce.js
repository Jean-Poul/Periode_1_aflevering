//Excercise a
//Join method
console.log("*** Ex a ***");
console.log("With join method: ");

const all = ["Lars", "Peter", "Jan", "Bo"];

const newString = "#" + all.join(", #");

console.log(newString);

//Excercise b
//Reduce method
console.log("*** Ex b ***");

const numbers = [2, 3, 67, 33];

//0 is the start argument value
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

/*
If you need to make your own for the exam ->
let sum = 0;
for (let n of numbers) {
    sum += n
}
console.log(sum);
*/

//Excercise c
console.log("*** Ex c ***");

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 }
];

let getAverage = (arr) => {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / arr.length;
};

let ages = members.map((member) => member.age);

console.log(getAverage(ages));

//Excercise d
console.log("*** Ex d ***");

const votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

/*
const a = {}
if (a["clinton"])
 console.log("I Will Not Print")
a["clinton"] = 1;
console.log("You will see me")
console.log("Value of clinton "+ a["clinton"]);
*/

const map = votes.reduce(function(accumulator, currentValue) {
    console.log("accumulator: " + accumulator);
    console.log("currentValue: " + currentValue);
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(map);