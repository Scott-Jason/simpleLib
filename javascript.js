console.log("hi man");

const myLibrary = [];

function Book(title, author, pageNum, read){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

myLibrary.push(new Book("TheHobbit", "JRR", "513", "true"));
myLibrary.push(new Book("Leaves", "Nature", "5133", "true"));

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".newBook");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

function addBook(){
    let userInput =  prompt("Please add a book in format 'title, author, #ofpages, read(true/false)'");
    userInput = userInput.split(' ');
    const aBook =  new Book(userInput[0],userInput[1],userInput[2],userInput[3]);
    myLibrary.push(aBook);
}

//addBook();
console.log(myLibrary);

function displayBooks(i){
    const main = document.querySelector(".main");
   
        
        const card = document.createElement('div');

        card.classList.add('card');
     
        card.textContent = myLibrary[i].title;
        card.style.fontWeight = 'bold';

        const author = document.createElement('div');
        author.textContent = "by: " + myLibrary[i].author;
        author.style.fontWeight = '100';
        card.appendChild(author);

        const pages = document.createElement('div');
        pages.textContent = "pages: " + myLibrary[i].pageNum;
        card.appendChild(pages);

        const read = document.createElement('div');
        if(myLibrary[i].read == "true"){
            read.style.color = 'green';
        }else{
            read.style.color = 'red';
        }
        read.textContent = "complete: " + myLibrary[i].read;
        read.style.fontWeight = '100';
        card.appendChild(read);

        main.appendChild(card);
}


for(let i = 0; i < myLibrary.length; i++){
    displayBooks(i);
}

