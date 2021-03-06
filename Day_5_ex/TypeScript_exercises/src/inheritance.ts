
console.log('*** Excercise a ***');


abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;

    get color(): string { return this._color };
    set color(color: string) { this._color = color };

    toString(): string { return `Shape info:\n Area:${this.area}\n Perimeter: ${this.perimeter}\n Color: ${this.color}` }
}

// Error: cant initialize an abstract class, just like in java. You can extend from an abstrac class
// let shape = new Shape<string>("blue");
// console.log(shape.toString());


// B) Create a new class Circle that should extend the Shape class.
console.log('*** Excercise b ***');

class Circle extends Shape {

    private _radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this._radius = radius;
    }

    get area(): number { return Math.PI * Math.pow(this.radius, 2) };
    //get perimeter(): number { return 2 * this.radius * Math.PI };
    get perimeter(): any { return 2 * this.radius * Math.PI }; // any to get cylinder error to work

    get radius(): number { return this._radius };
    set radius(radius: number) { this._radius = radius };

}

const circle = new Circle("Green", 9)

console.log(circle.toString());
console.log(circle.area);
console.log(circle.perimeter);
console.log(circle.radius)
circle.radius = 12;
console.log(circle.radius)


// C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.
console.log('*** Excercise c ***');

class Cylinder extends Circle {
    private _height: number;

    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this._height = height;
    }

    get perimeter(): Error { return new Error("not implemented") };

    get volume(): number { return Math.PI * Math.pow(super.area, 2) * this.height }

    get height(): number { return this._height };
    set height(height: number) { this._height = height };

}

const cylinder = new Cylinder("Blue", 18, 36);

console.log(cylinder.toString());
console.log('Height: ' + cylinder.height);
console.log('Volume: ' + cylinder.volume);


// Alternative to this exercise: If you come to like the functional style of programming, you could 
// implement this example using Type Aliases as explained by Hejlsberg in his video (43min)
console.log('*** Alternative Extra ***');
console.log('*** functional programming ***');

type ShapeTwo =
    { kind: "circle", radius: number } |
    { kind: "cylinder", radius: number, height: number };

function getArea(shape: ShapeTwo) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
            break;
        case "cylinder":
            return Math.PI * (shape.radius ** 2) * shape.height;
            break;

        default:
            break;
    }
    throw new Error('Invalid shape');
}

const shape: ShapeTwo = { kind: 'circle', radius: 18}
const area = getArea(shape)

const shapeTwo: ShapeTwo = { kind: 'cylinder', radius: area, height: 36}
const areaTwo = getArea(shapeTwo)

console.log('Circle area: ' + area);
console.log('Cylinder volume: ' + areaTwo);

