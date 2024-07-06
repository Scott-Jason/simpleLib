console.log("hi man");

const myLibrary = [];

function Book(title, author, pageNum, read){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function addBook(){
    let userInput =  prompt("Please add a book in format 'title, author, #ofpages, read(true/false)'");
    userInput = userInput.split(' ');
    const aBook =  new Book(userInput[0],userInput[1],userInput[2],userInput[3]);
    myLibrary.push(aBook);
}

addBook();
console.log(myLibrary);