function Book(author,title,pages,read) {
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.read=read;
};

Book.prototype.info = function(){
    return `${this.title}, author: ${this.author}, has ${this.pages}, ${this.read}`;
};

let library=[];

function addBook(book) {
    library.push(book)
}

