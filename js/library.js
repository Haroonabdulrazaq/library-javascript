let myLibray = []

function Book(author, title, num_pages, read = false) {
  this.author = author
  this.title = title
  this.num_pages = num_pages
  this.read = read
}

addBookToLibrary = new Book()

function addBookToLibrary(author, title, num_pages) {
  let newBook = new Book(author, title, num_pages)
  myLibray.push(newBook)
}

function removeBook() {

}

function displayBooks() {
  // loops through array and displays books
}