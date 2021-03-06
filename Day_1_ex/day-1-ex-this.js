// How this in JavaScript differ from this in Java
//----------------------------------------

/*
'this' references the object that is executing the current function

When using the 'this' keyword in java it will always refer to the class/object/scope you are within. 
When using 'this' in javascript this can start to become confusing. When you are within an object and use 'this',
this will refer to the object just as in java. A function in an object is a method and when using 'this' in the method,
'this' will refer to the object itself - again just like in java. Now if you have a function(or callback) within the method
'this' will start to refer to the window scope (global in node). To get around this you can use an arrow function or make use
of the bind() method. 


*/

//With ES6, classes were introduced, so we don't make use of constructor functions that much anymore

class Car {
    constructor(make, model) {
        this._make = make
        this._model = model
        this.show = this.show.bind(this) //Here we bind the 'this' to the car object, so we can make use of
                                         //showAsync and still refer to the car object and not the window object (undefined).
    }

    show = function() {
        console.log(`${this._make}, ${this._model}`)
    }

    showAsync = function() {
        setTimeout(this.show,1000); //Ex of an async call
    }

    //when there is a _ (underscore) DON'T use that variable. Ex car1._make -> see line 48-49.
    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make
    }

}

const car1 = new Car("Volvo", "V70");
const car2 = new Car("WV", "Golf");
car1.make = "Audi"; //Setter like in java
console.log(car1.make) //Getter like in java
car1.showAsync();
car2.show();


//Why should we store a reference to 'this' before ES6?
/*

Because if we had a function within a function(callback) then 'this' would refer to the window scope and therefor we would
make a variable which pointed to the object itself.

Ex: const self = this;

this.showAsync = function() {
    const self = this;
    setTimeout(function() {
        console.log(self.make + ", " + self.model);
    }, 0)
};

Now we can use the variable self to refer to the object. Another way to get around this is to use an arrow function.

*/

//Other examples of 'this'
console.log('*** Other this examples ***');
// method -> object
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

video.play();
video.stop();

const videoTwo = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this); //second parameter that is passed is 'this'
    }
};

videoTwo.showTags();

// function -> global (window, global)

function playVideo(){
    console.log(this);
}

playVideo();

//Constructor function

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); // new keyword makes empty object {}
