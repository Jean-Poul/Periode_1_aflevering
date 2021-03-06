let http = require('http');

/* fetch('test').then().catch() */

// Interfaces are here to make a template for an object
interface IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

function library(ibook: IBook) {
    // return "You want to rent: " + ibook.title + " " + ibook.author + " " + ibook.published + " " + ibook.pages;
    // return lName ? {fName,lName} :{fName};
    console.log(ibook);
}
function libraryTwo(title: string, author: string, published?: Date, pages?: number): IBook {
    // return "You want to rent: " + ibook.title + " " + ibook.author + " " + ibook.published + " " + ibook.pages;
 return published ? pages ?  {title, author, published, pages} : {title, author, pages}: {title, author};
}
// new Date("2019-01-16");
let book: IBook = { title: "Lord of the rings", author: "J.R.R. Tolkien", published: new Date(), pages: 1337 };

let book2: IBook = { title: "Lord of the rings", author: "J.R.R. Tolkien", pages: 1337 };

let book3: IBook = { title: "Lord of the rings", author: "J.R.R. Tolkien" };

// Duck typing: "If it looks like a duck, it quacks like a duck, then it is a duck"
// What that mean is that I have made an object with the same types as the interface and therefor are able to make the object.
// The required properties have to be there in order to not make typescript complain

// Readonly author property so not able to change it
// book3.author = "I made this";

library(book);
library(book2);
library(book3);

console.log(libraryTwo("Lord of the rings", "J.R.R. Tolkien"));

// document.body.textContent = libraryTwo("Lord of the rings", "J.R.R. Tolkien");


// Example on how to do it the java way
class Book implements IBook {

    #title: string
    #author: string
    #published: Date
    #pages: number

    constructor(title: string,
        author: string,
        published: Date,
        pages: number) {
        this.#title = title
        this.#author = author
        this.#published = published
        this.#pages = pages
    }

    get title(): string { return this.#title }
    set title(title: string) { this.#title = title }

    get author(): string { return this.#author }
    set author(author: string) { this.#author = author }

    get published(): Date { return this.#published }
    set published(published: Date) { this.#published = published }

    get pages(): number { return this.#pages }
    set pages(pages: number) { this.#pages }

    toString(): string { return this.title + this.author + this.published + this.pages }
}

let book4 = new Book("Lord of the rings", "J.R.R. Tolkien", new Date(), 1337)

console.log(book4.toString());

