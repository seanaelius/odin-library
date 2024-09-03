//DEFINE TABLE, TABLE BODY
const body = document.querySelector("body");
const main = document.querySelector("main");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
//CREATE ROW
let row = document.createElement("tr");
let data = document.createElement("td");
//ADD ROW TO TBODY

//DEFINE DIALOG ELEMENT
const dialogAside = document.querySelector("dialog")

//DEFINE FORM INPUT FIELDS
const titleInput = document.querySelector("input#title");
const authorInput = document.querySelector("input#author");
const pagesInput = document.querySelector("input#pages");

const bookAddButton = document.querySelector("button#bookAdd");
bookAddButton.addEventListener("click", () => {dialogAside.showModal() })

const closeButton = document.querySelector("button#close")
closeButton.addEventListener("click", ()=> {dialogAside.close()})


const submitButton = document.querySelector("button#submit")
submitButton.addEventListener("click", (event)=> {
    event.preventDefault()
    let newTitle = titleInput.value
    let newAuthor = authorInput.value
    let newPages = pagesInput.value
    let haveRead = document.querySelector('input[name="read"]:checked').value;

    //CLEAR LIBRARY FROM TABLE
    clearLibrary(myLibrary)

    //ADD NEW BOOK TO LIBRARY
    var newBook = new book(newTitle, newAuthor, newPages, haveRead)
    addBookToLibrary(newBook)

    //UPDATE TABLE
   displayLibrary(myLibrary)
})



//BOOK CONSTRUCTOR
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



//console.log(theHobbit.info());
//console.log(Object.getPrototypeOf(theHobbit) === book.prototype);

/*The original object "theHobbit" inherits from the book prototype. 
Therefore if I define a function on the prototype, theHobbit can access this function. */

//book.prototype.sayHello = function(){
    //return "Hello!"
//}

//console.log(theHobbit.sayHello());

/*What the original is based off of. 
We can use this to save memory or inherit properties from the prototype*/

/* This goes to another level, book.prototype inherits from Object.prototype */
/* We can use Object.prototype to set other object's prototypes and allows it to inherit from multiple prototypes */

let myLibrary= [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}


addBookToLibrary(new book('The Hobbit','J.R.R. Tolkien', '295', 'no'))
//console.log(theHobbit)

//LOAD LIBRARY ON PAGE FUNCTION
function displayLibrary(library) {
    for (const book in library) {
        createRowAndCells(library[book], book)
    }
}



//CREATE ROW AND CELLS FUNCTION
function createRowAndCells(item, itemNumber) {
    let newRow = document.createElement("tr");
    newRow.dataset.bookNumber = `${itemNumber}`
    console.log(newRow.dataset.bookNumber)
    tbody.appendChild(newRow);
    for (var info in item){
        newRow.insertCell().textContent = `${item[info]}`;
    }
}



//INITIAL LOAD LIBRARY
displayLibrary(myLibrary)

//CLEAR LIBRARY FUNCTIONS
function clearLibrary(library){ 
    for (const book in library) {
        removeLast()
    }
}

function removeLast(){
    tbody.removeChild(tbody.lastChild)
}