"use strict";
let http = require('http');
function library(ibook) {
    return "You want to rent: " + ibook.title + " " + ibook.author + " " + (ibook === null || ibook === void 0 ? void 0 : ibook.published) + " " + (ibook === null || ibook === void 0 ? void 0 : ibook.pages);
}
// new Date("2019-01-16");
let book = { title: "Lord of the rings", author: "J.R.R. Tolkien", published: new Date(), pages: 1337 };
let book2 = { title: "Lord of the rings", author: "J.R.R. Tolkien", pages: 1337 };
let book3 = { title: "Lord of the rings", author: "J.R.R. Tolkien" };
// Duck typing: "If it looks like a duck, it quacks like a duck, then it is a duck"
// What that mean is that I have made an object with the same types as the interface and therefor are able to make the object.
// The required properties have to be there in order to not make typescript complain
// Readonly author property so not able to change it
// book3.author = "I made this";
console.log(library(book));
console.log(library(book2));
console.log(library(book3));
// document.body.textContent = library(book);
//# sourceMappingURL=ts-exercise.js.map