"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _title, _author, _published, _pages;
let http = require('http');
function library(ibook) {
    // return "You want to rent: " + ibook.title + " " + ibook.author + " " + ibook.published + " " + ibook.pages;
    // return lName ? {fName,lName} :{fName};
    console.log(ibook);
}
function libraryTwo(title, author, published, pages) {
    // return "You want to rent: " + ibook.title + " " + ibook.author + " " + ibook.published + " " + ibook.pages;
    return published ? pages ? { title, author, published, pages } : { title, author, pages } : { title, author };
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
library(book);
library(book2);
library(book3);
console.log(libraryTwo("Lord of the rings", "J.R.R. Tolkien"));
// document.body.textContent = library(book);
// Example on how to do it the java way
class Book {
    constructor(title, author, published, pages) {
        _title.set(this, void 0);
        _author.set(this, void 0);
        _published.set(this, void 0);
        _pages.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _author, author);
        __classPrivateFieldSet(this, _published, published);
        __classPrivateFieldSet(this, _pages, pages);
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    get author() { return __classPrivateFieldGet(this, _author); }
    set author(author) { __classPrivateFieldSet(this, _author, author); }
    get published() { return __classPrivateFieldGet(this, _published); }
    set published(published) { __classPrivateFieldSet(this, _published, published); }
    get pages() { return __classPrivateFieldGet(this, _pages); }
    set pages(pages) { __classPrivateFieldGet(this, _pages); }
    toString() { return this.title + this.author + this.published + this.pages; }
}
_title = new WeakMap(), _author = new WeakMap(), _published = new WeakMap(), _pages = new WeakMap();
let book4 = new Book("Lord of the rings", "J.R.R. Tolkien", new Date(), 1337);
console.log(book4.toString());
//# sourceMappingURL=interface1.js.map