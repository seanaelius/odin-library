//DEFINE TABLE, TABLE BODY
const body = document.querySelector("body");
const main = document.querySelector("main");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
//CREATE ROW
let row = document.createElement("tr");
let data = document.createElement("td");
//ADD ROW TO TBODY
tbody.appendChild(row);

//DEFINE DIALOG ELEMENT
const dialogAside = document.querySelector("dialog")

//DEFINE FORM INPUT FIELDS
const titleInput = document.querySelector("input#title");
const authorInput = document.querySelector("input#author");
const pagesInput = document.querySelector("input#pages");
const readInput = document.querySelector("input#read");
const submitButton = document.querySelector("button#submit")

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

const myLibrary= [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}


addBookToLibrary(new book('The Hobbit','J.R.R. Tolkien', '295', 'No'))
//console.log(theHobbit)

//LOAD LIBRARY ON PAGE
for (const book in myLibrary){
    tbody.appendChild(row);
    var currentBook = myLibrary[book];
    //console.log(currentBook)
    for (var info in currentBook) {
        //console.log(info)
        //console.log(currentBook[info])
        row.insertCell().textContent = `${currentBook[info]}`;
    }
}

const bookAddButton = document.querySelector("button#bookAdd");
let i = 0;
bookAddButton.addEventListener("click", () => {
    if (i == 0) {
        dialogAside.showModal()
        i += 1;
    } else {    
        dialogAside.close()
        i -= 1;
    }
})

submitButton.addEventListener("click", (event)=> {
    event.preventDefault()
    var newTitle = titleInput.value
    var newAuthor = authorInput.value
    var newPages = pagesInput.value
    var haveRead = readInput.value

    var newBook = new book(newTitle, newAuthor, newPages, haveRead)

    console.log(newBook)
    
    
    addBookToLibrary(newBook)
    console.log(myLibrary)
    let newRow = document.createElement("tr");
    tbody.appendChild(newRow);
    for (var info in newBook){
        newRow.insertCell().textContent = `${newBook[info]}`;
    }
})
