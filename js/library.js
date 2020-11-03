let myLibrary = []

function Book(author, title, num_pages, read = false) {
  this.author = author
  this.title = title
  this.num_pages = num_pages
  this.read = read
}

const bookBtn = document.querySelector('.add-book')

function addBookToLibrary(author, title, num_pages) {
  let newBook = new Book(author, title, num_pages)
  myLibrary.push(newBook)
}

bookBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const bookAuthor = document.querySelector('.form-author').value
  const bookTitle = document.querySelector('.form-title').value
  const bookPages = document.querySelector('.form-num-pages').value
  // add read here
  addBookToLibrary(bookAuthor, bookTitle, bookPages)
  console.log('added book')
  console.log(myLibrary)
})


function removeBook() {

}

const books = document.querySelector('.books')

function displayBooks() { 
  // loops through array and displays books
  for (let i = 0; i < myLibrary.length; i++) {
    let listItem = document.createElement('li')

    let div = document.createElement('div')

    let title = document.createElement('h2')
    title.textContent = 'Book Title: ' + myLibrary[i].title
    div.appendChild(title)

    let author = document.createElement('h3')
    author.textContent = 'Book Author: ' + myLibrary[i].author
    div.appendChild(author)

    let pages = document.createElement('p')
    pages.textContent = 'No. Pages: ' + myLibrary[i].num_pages
    div.appendChild(pages)

    listItem.appendChild(div)

    books.appendChild(listItem)
  }
}

addBookToLibrary('Tolkien', 'LOTR', 255, false)
addBookToLibrary('Hamil', 'Fast Book', 15, true)

console.log('Book display:')
displayBooks()

form = document.querySelector('.form');
toggle = document.querySelector('.toggle')


toggle.addEventListener('click', (e)=> {
  form.classList.toggle('no-display')
})