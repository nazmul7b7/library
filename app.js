const container = document.querySelector('.container');
const newBook = document.querySelector('.newBook');
const form = document.querySelector('.form');
const enterBtn = document.querySelector('.enterBtn');

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

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;

  myLibrary.push(new Book(title, author, pages));
}

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

newBook.addEventListener('click', () => {
  form.style.display = 'flex';
});

enterBtn.addEventListener('click', () => {
  addBookToLibrary();
  form.style.display = 'none';
});
