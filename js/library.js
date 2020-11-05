const myLibrary = [];

const books = document.querySelector('.books');

const bookModule = (() => {
  function Book(author, title, numPages, read) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
  }


  // Display Books
  function displayBooks() {
    // loops through array and displays books
    books.textContent = '';
    for (let i = 0; i < myLibrary.length; i += 1) {
      const listItem = document.createElement('li');

      const div = document.createElement('div');

      const title = document.createElement('h2');
      title.textContent = `Book Title: ${myLibrary[i].title}`;
      div.appendChild(title);

      const author = document.createElement('h3');
      author.textContent = `Book Author: ${myLibrary[i].author}`;
      div.appendChild(author);

      const pages = document.createElement('p');
      pages.textContent = `No. Pages: ${myLibrary[i].numPages}`;
      div.appendChild(pages);

      const read = document.createElement('button');
      read.setAttribute('class', 'status-btn');

      const readStatus = myLibrary[i].read ? 'read' : 'unread';
      read.textContent = readStatus;


      read.onclick = function () {
        if (read.textContent === 'unread') {
          read.textContent = 'read';
          myLibrary[i].read = true;
        } else {
          read.textContent = 'unread';
          myLibrary[i].read = false;
        }
      };

      div.appendChild(read);

      listItem.setAttribute('book-index', i);

      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'delete-btn');
      deleteBtn.textContent = 'Delete Book';
      deleteBtn.addEventListener('click', () => {
        const idx = deleteBtn.parentNode.parentNode.getAttribute('book-index');
        myLibrary.splice(idx, 1);
        displayBooks();
      });
      div.appendChild(deleteBtn);


      listItem.appendChild(div);
      books.appendChild(listItem);
    }
  }

  // Add books to Library
  function addBookToLibrary(author, title, numPages, read) {
    const newBook = new Book(author, title, numPages, read);
    myLibrary.push(newBook);
    displayBooks();
  }

  return {
    addBookToLibrary,
  };
})();


const bookBtn = document.querySelector('.add-book');
const form = document.querySelector('.form');


bookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookAuthor = document.querySelector('.form-author').value;
  const bookTitle = document.querySelector('.form-title').value;
  const bookPages = document.querySelector('.form-num-pages').value;
  const bookRead = document.querySelector('.form-read').checked;
  // add read here
  if (bookAuthor === '' || bookTitle === '' || bookPages === '') {
    alert('Form inputs should not be empty');
  } else {
    bookModule.addBookToLibrary(bookAuthor, bookTitle, bookPages, bookRead);
    form.reset();
  }
});

bookModule.addBookToLibrary('Tolkien', 'LOTR', 255, false);
bookModule.addBookToLibrary('Hamil', 'Fast Book', 15, true);


const toggleBtn = document.querySelector('.toggle-form');


toggleBtn.addEventListener('click', () => {
  form.classList.toggle('no-display');
});