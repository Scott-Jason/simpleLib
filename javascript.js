console.log("hi man");

const myLibrary = [];

function Book(title, author, pageNum, read, index){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.index = index;
}

// Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
//   };

Book.prototype.deleteSelf = function() {
 //mnake this
};

Book.prototype.swapRead = function() {
    //make this
};

myLibrary.push(new Book("The Hobbit", "JRR", "1084", "true", 0));
myLibrary.push(new Book("Leaves Of Grass", "WW", "694", "false", 1));
let counter = 2;

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

const form = document.querySelector("dialog form");

form.addEventListener("submit",  function(e){
    e.preventDefault();
    console.log('yo momma');
    const formData = new FormData(form);
    let trueFalse = "true";
    if(formData.get('usr_read') !== 'on'){
        trueFalse = "false";
        console.log("PLEASE");
    }
    myLibrary.push(new Book(formData.get('usr_title'), formData.get('usr_author'), formData.get('usr_pages'), trueFalse, counter));
    displayBooks(myLibrary.length-1);
    counter++;

});

function addBook(){ //pretty much depreceated
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

