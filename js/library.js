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

function displayBooks() {
  // loops through array and displays books
}