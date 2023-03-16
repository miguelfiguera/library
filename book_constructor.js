function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}


Book.prototype.info = function () {
  return `${this.title}, author: ${this.author}, has ${this.pages}, ${this.read}`;
};

let library = [];
let libraryIndex=0
function addBook(book) {
  library.push(book);
}

let frist=new Book('Tolkien',"The two towers","5",true)
let second=new Book("Jack London","White Fang","232",true)
let third=new Book("George Lucas","Star Wars","500",true)
let fourth=new Book("Miguel de Cervantes","Don Quijote","900",false)

library.push(frist, second, third,fourth)
renderingBook()
libraryIndex+=4


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
    renderingBook()
    libraryIndex+=1
    // Reset the form fields after submission.
    form.reset()
    toggleForm()
    changeName()
})

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

        title.innerText=e.title
        author.innerText=e.author
        pages.innerText=e.pages
        e.read == true ? readed.innerText= "Yeah, readed!" : readed.innerText= "Not yet readed";

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(readed)

        document.getElementById("book-container").appendChild(card)
        alert(`Book ${e.title} has been created!`)
    }
}