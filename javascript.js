console.log("hi man");
const myLibrary = [];

class Book {
    constructor(title, author, pageNum, read, index){
        this.title = title;
        this.author = author;
        this.pageNum = pageNum;
        this.read = read;
        this.index = index;
    }

    deleteSelf() {
        const main = document.querySelector(".main");
        const carDel = document.getElementById(`${this.index}`);
        main.removeChild(carDel);
    }

    swapRead() {
        const findMe = document.getElementById(`${this.index}`);
       
        if(findMe.querySelector(".true") == null){
            const read = findMe.querySelector(".false");
            read.classList.remove("false");
            //its false
            read.textContent = "complete: " + "true";
            read.style.color = "green";
            read.classList.add("true");
        }else{
            const read = findMe.querySelector(".true");
            read.classList.remove("true");
            //its true
            read.textContent = "complete: " + "false";
            read.style.color = "red";
            read.classList.add("false");
    
        }
    }
}




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
    
    const formData = new FormData(form);
    let trueFalse = "true";
    if(formData.get('usr_read') !== 'on'){
        trueFalse = "false";
     
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
//console.log(myLibrary);

function displayBooks(i){
    const main = document.querySelector(".main");
   
        
        const card = document.createElement('div');
        card.id = myLibrary[i].index;
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
            read.classList.add("true");
            read.style.color = 'green';
        }else{
            read.classList.add("false");
            read.style.color = 'red';
        }
        read.textContent = "complete: " + myLibrary[i].read;
        read.style.fontWeight = '90';
        card.appendChild(read);
        const delButton = document.createElement('button');
        delButton.textContent = "Remove Book";
        delButton.style.justifySelf = "center";
        delButton.style.marginTop = "10px";
        delButton.addEventListener("click", () => {
            myLibrary[i].deleteSelf();
        });
        delButton.style.width = "80px";
        card.appendChild(delButton);
        const swapButton = document.createElement('button');
        swapButton.textContent = "Swap Read Status";
        swapButton.addEventListener("click", () => {
            myLibrary[i].swapRead();
        
        });
        swapButton.style.width = "80px";
        swapButton.style.justifySelf = "center";
        card.appendChild(swapButton);
        


        main.appendChild(card);
}


for(let i = 0; i < myLibrary.length; i++){
    displayBooks(i);
}





