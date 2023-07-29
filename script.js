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

myLibrary.push(betterCallSaul)

const table = document.querySelector('.table')

book.prototype.displayBook = function () {
    let tableRow = table.insertRow(-1)
    let title = tableRow.insertCell(-1)
    title.textContent = `${this.title}`
    let author = tableRow.insertCell(-1)
    author.textContent = `${this.author}`
    let pages = tableRow.insertCell(-1)
    pages.textContent = `${this.pages}`
    let read = tableRow.insertCell(-1)
    read.textContent = `${this.read}`
}

betterCallSaul.displayBook()
//console.log(myLibrary)
//console.log(myLibrary[0].title)
