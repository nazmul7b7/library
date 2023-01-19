const container = document.querySelector('.container');

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages.`;
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295');

const moontoon = new Book('Chou', 'MLBB', '192');

myLibrary.push(theHobbit);
myLibrary.push(moontoon);

function addBookToLibrary() {}

function displayBook() {
  myLibrary.forEach((book) => {
    let bookContainer = document.createElement('div');
    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    title.textContent = 'Title: ' + book.title;
    author.textContent = 'Author: ' + book.author;
    pages.textContent = 'Pages: ' + book.pages;
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.classList = 'bookContainer';
    container.appendChild(bookContainer);
  });
}

displayBook();
