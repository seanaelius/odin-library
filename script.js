let myLibrary = [];

function Book(title, author, pages, read) {
    //CONSTRUCTOR
    this.title
    this.author
    this.pages
    this.read
    //DISPLAYS INFO
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(newBook) {
    //DO STUFF
    myLibrary.push(newBook)
}


//DEFINE TABLE
const table = document.querySelector('.table')

function displayBooks(myLibrary) {
    for (const book in myLibrary) {
    }
}