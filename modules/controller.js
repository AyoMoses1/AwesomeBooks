import { listOfBooks } from './selectors.js';

export default function (booksArray) {
  const collection = JSON.parse(localStorage.getItem('books'));
  booksArray.books = collection;

  booksArray.books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', book.id);
    listItem.innerHTML = `<div>
                            <span class="title">"${book.title}"</span> by <span class="author">${book.author}</span>
                          </div>
                          <div>
                            <button id=${book.id} class="remove_btn">Remove</button>
                          </div>
                        `;
    listOfBooks.appendChild(listItem);
    const listB = document.getElementById(`${book.id}`);
    listB.addEventListener('click', () => {
      const deletedBook = document.getElementById(book.id);
      deletedBook.parentNode.removeChild(deletedBook);
      booksArray.removeBook(book.id);
    });
  });
}
