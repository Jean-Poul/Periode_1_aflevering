// a) Implement a generic function which will take an array of any kind, and return the array reversed 
// (just use the built-in reverse function), so the three first calls below will print the reversed array, and the last call will fail
console.log('*** Excercise a ***');

function reverseArr<T>(arg: T[]): T[] {
    return arg.reverse();
}


console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"])); 


// b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
console.log('*** Excercise b ***');
console.log('*** Generic class ***');
class DataHolder<T> {
    val: T;
    constructor(val: T) { this.val = val };
    getValue() { return this.val };
    setValue(val: T) { this.val = val };
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
/* d.setValue(1337);
console.log(d.getValue()); */


let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
/* d2.setValue("600");
console.log(d2.getValue()); */

//c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods
console.log('*** Getters/Setters ***');
console.log('*** Excercise b ***');

class DataHolderTwo<T> {
    #val: T
    constructor(val: T) { this.#val = val };
    get val(): T { return this.#val };
    set val(val: T) { this.#val = val };

    toString(): T { return this.#val }
}

let d3 = new DataHolderTwo<string>("I like");
console.log(d3.toString());
d3.val = "Pie";
console.log(d3.toString());