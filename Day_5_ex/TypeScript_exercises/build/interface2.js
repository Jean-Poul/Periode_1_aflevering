"use strict";
// Example 1
function myFunc(a, b, c) {
    const array = [a, b, c];
    return array;
}
console.log(myFunc("a", "b", "c"));
// Example 2
function myFunc2(iMyFunc) {
    const array = [iMyFunc.string1, iMyFunc.string2, iMyFunc.string3];
    return array;
}
const myfunc = { string1: "d", string2: "e", string3: "f" };
const myf = myFunc2(myfunc);
console.log(myf);
//c) Design another implementation that returns an array, with the three strings uppercased.
/* function myFunc3(a: string, b: string, c: string) {
    const array: string[] = [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    return array;
}

console.log(myFunc3("a", "b", "c")); */
function myFunc3(iMyFunc) {
    const array = [iMyFunc.string1.toUpperCase(), iMyFunc.string2.toUpperCase(), iMyFunc.string3.toUpperCase()];
    return array;
}
const myfunc2 = { string1: "d", string2: "e", string3: "f" };
const myf2 = myFunc2(myfunc2);
console.log(myf2);
//  Test f2 with the two implementations created in b+c.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    //let [ a, b, c ] = [myFunc("1", "2", "3"), myFunc2(myfunc), myFunc3("4", "5", "6")];
    //let [ a, b, c] = ["A", "B", "C"];
    let [a, b, c] = [myFunc("1", "2", "3"), myFunc2(myfunc), myFunc3(myfunc2)];
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(f1.string1, f1.string2, f1.string3);
};
f2(myfunc);
f2(myfunc2);
// f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
//f2(myFunc("a", "b", "c"));
//# sourceMappingURL=interface2.js.map