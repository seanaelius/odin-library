//DEFINE TABLE, TABLE BODY
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
//CREATE ROW
let row = document.createElement("tr");
let data = document.createElement("td");
//ADD ROW TO TBODY
tbody.appendChild(row);



function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //this.info = function(){
        //return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    //}
}

const theHobbit = new book('The Hobbit','J.R.R. Tolkien', '295', 'No');

//console.log(theHobbit.info());
console.log(Object.getPrototypeOf(theHobbit) === book.prototype);

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
console.log(theHobbit)

for (const book in myLibrary){
    tbody.appendChild(row);
    var currentBook = myLibrary[book];
    console.log(currentBook)
    for (var info in currentBook) {
        console.log(info)
        console.log(currentBook[info])
        row.insertCell().textContent = `${currentBook[info]}`;
    }
}