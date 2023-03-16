function Book(author, title, pages, read,index) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.index=index;
}


Book.prototype.info = function () {
  return `${this.title}, author: ${this.author}, has ${this.pages}, ${this.read}`;
};

let library = [];
let libraryIndex=0
function addBook(book) {
  library.push(book);
}

let frist=new Book('Tolkien',"The two towers","5",true,0)
let second=new Book("Jack London","White Fang","232",true,1)
let third=new Book("George Lucas","Star Wars","500",true,2)
let fourth=new Book("Miguel de Cervantes","Don Quijote","900",false,3)
let fifth=new Book("Lord O'malley","Straight From Heaven","455",false,4)
library.push(frist, second, third,fourth,fifth)
renderingBook()
libraryIndex+=5


let form=document.getElementById("bookForm")


//button to display form
let displayForm=document.getElementById("addBook");

let toggleForm=() => {
    form.classList.toggle("hidden");
}

let changeName= ()=> {return displayForm.innerText.length > 6 ?
displayForm.innerText = "Close" : displayForm.innerText= "Add New Book!";
}

displayForm.onclick= () => {changeName(),toggleForm()}



// Capturing the form values for the constructor:

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let formValue = event.target.elements

    newBook =  new Book(
        formValue.author.value,
        formValue.title.value,
        formValue.pages.value,
        formValue.read.checked
    )

    // Pushes Obj to library array.
    addBook(newBook)
    //adding data atribute for the index
    newBook.index=library.indexOf(newBook);

    renderingBook()
    libraryIndex+=1
    // Reset the form fields after submission.
    form.reset()
    toggleForm()
    changeName()
})

//functions for updated the status, erase from library, and reset index
//reset index is to keep things organized
Book.prototype.updateStatus= function(){this.read==true?this.read=false:this.read=true;}
Book.prototype.eraseFromRendering=function(){library.splice(this.index,1)}

let resetIndex=function(){
    for(let i=0;i<library.length;i++){
        library[i].index=i;
    }
}

// Rendering the books
function renderingBook(){
    for(let i=libraryIndex;i<library.length;i++){
        let e=library[i]
        let card=document.createElement('div')
        card.classList.add("card")
        let title=document.createElement("h3")
        let author=document.createElement("h4")
        let pages=document.createElement("p")
        let readed=document.createElement("p")
        let deleteButton=document.createElement("button")
        let updatedReaded=document.createElement("button")

        updatedReaded.innerText="Update status"
        deleteButton.innerText= "Delete this book"
        title.innerText=e.title
        author.innerText=e.author
        pages.innerText=e.pages
        let updatedRead= function(e) {e== true ? readed.innerText= "Yeah, readed!" : readed.innerText= "Not yet readed";}
        updatedRead(e.read)

        card.id=e.index
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(readed)
        card.appendChild(updatedReaded)
        card.appendChild(deleteButton)
        
        bookContainer=document.getElementById("book-container")
        bookContainer.appendChild(card)


        updatedReaded.onclick=()=>{e.updateStatus(),updatedRead(e.read)};
        deleteButton.onclick=()=>{library.splice(e.index,1),card.remove(),resetIndex()};
        //I used remove() to pull the card out of the book-container div

    }
}


