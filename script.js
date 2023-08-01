let myLibrary = [];

function book(title, author, pages, read) {
    //CONSTRUCTOR
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    //DISPLAYS INFO
    this.info = function () { return `${title} by ${author}, ${pages} pages, ${read}` }
}

const betterCallSaul = new book('Better Call Saul', 'Saul Goodman', 300, 'read')
const hobbit = new book('The Hobbit', 'J.R.R Tolkien', 400, 'not read')

function addBookToLibrary(name) {
    myLibrary.push(name)
}

addBookToLibrary(betterCallSaul)
addBookToLibrary(hobbit)

const table = document.querySelector('.table')

let clear = 0;


function displayLibrary() {

    //CHECK IF TABLE NEEDS TO BE CLEARED
    //IF CLEAR = 0, ADD 1
    //IF CLEAR = 1, REMOVE 1, REMOVE CONTENT OF TABLE

    //DEFINE DISPLAYBOOK
    book.prototype.displayBook = function () {
        //CREATE ROW
        let tableRow = table.insertRow(-1)
        //CREATE CELL FOR TITLE
        let title = tableRow.insertCell(-1)
        title.textContent = `${this.title}`
        //CREATE CELL FOR AUTHOR
        let author = tableRow.insertCell(-1)
        author.textContent = `${this.author}`
        //CREATE CELL FOR PAGES
        let pages = tableRow.insertCell(-1)
        pages.textContent = `${this.pages}`
        //CREATE CELL FOR READ OR NOT
        let read = tableRow.insertCell(-1)
        read.textContent = `${this.read}`
    }

    //LOOP THROUGH EACH ITEM IN LIBRARY
    //DISPLAY BOOK
    for (item in myLibrary) {
        myLibrary[item].displayBook()
    }
}

const updateButton = document.querySelector('#update')
updateButton.addEventListener('click', displayLibrary)

//ADD EVENT LISTENER FOR NEW BOOK BUTTON
//CREATE DOM ELEMENTS FOR FORM ON RIGHT SIDE OF PAGE
//HAVE SUBMIT NOT SEND TO SERVER 
//USE PREVENT DEFAULT
//technical documentation: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//CREATE DELETE BUTTON
//ADD READ TOGGLE OPTION FOR EACH BOOK