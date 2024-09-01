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

//CREATE ASIDE
let bookAside = document.createElement("aside");

//CREATE FORM
let bookForm = document.createElement("form");
bookForm.method = 'POST';

//CREATE FORM FIELDS
let titleInputDiv = document.createElement("div");
let titleInput = document.createElement("input");
let titleLabel = document.createElement("label");
titleInput.type = 'text';
titleLabel.textContent = "Title:"
titleInputDiv.appendChild(titleLabel);
titleInputDiv.appendChild(titleInput);

let authorInputDiv = document.createElement("div");
let authorInput = document.createElement("input");
let authorLabel = document.createElement("label");
authorInput.type = 'text';
authorLabel.textContent = "Author:"
authorInputDiv.appendChild(authorLabel);
authorInputDiv.appendChild(authorInput);

let pagesInputDiv = document.createElement("div");
let pagesInput = document.createElement("input");
let pagesLabel = document.createElement("label");
pagesInput.type = 'text';
pagesLabel.textContent = "Pages:"
pagesInputDiv.appendChild(pagesLabel);
pagesInputDiv.appendChild(pagesInput);

let readInputDiv = document.createElement("div");
let readInput = document.createElement("input");
let readLabel = document.createElement("label");
readInput.type = 'text';
readLabel.textContent = "Read:"
readInputDiv.appendChild(readLabel);
readInputDiv.appendChild(readInput);


//ADD FORM FIELDS TO FORM
bookForm.appendChild(titleInputDiv)
bookForm.appendChild(authorInputDiv)
bookForm.appendChild(pagesInputDiv)
bookForm.appendChild(readInputDiv)

//ADD FORM SUBMIT BUTTON
let submitButton = document.createElement("input")
submitButton.type = "submit"
submitButton.value = "Add Book!"
bookForm.appendChild(submitButton)


//BOOK CONSTRUCTOR
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new book('The Hobbit','J.R.R. Tolkien', '295', 'No');

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


addBookToLibrary(theHobbit)
//console.log(theHobbit)

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
        main.appendChild(bookAside); 
        bookAside.appendChild(bookForm)
        bookAddButton.textContent = "Done adding a book!"
        i += 1;
    } else {
        main.removeChild(bookAside);
        bookAddButton.textContent = "Add a book!"
        i -= 1;
    }
})