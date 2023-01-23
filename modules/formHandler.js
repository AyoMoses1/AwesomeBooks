import { listOfBooks } from './selectors.js';

export default function (arr) {
  const title = document.querySelector('#book_title').value;
  const author = document.querySelector('#book_author').value;
  const index = Math.random();
  arr.addBook({ id: index, title, author });
  const collection = JSON.parse(localStorage.getItem('books'));
  arr = collection;
  const newBook = arr.filter((book) => book.id === index)[0];
  const listItem = document.createElement('li');
  listItem.setAttribute('id', newBook.id);
  listItem.innerHTML = `<div>
                            <span class="title">"${newBook.title}"</span> by <span class="author">${newBook.author}</span>
                          </div>
                          <div>
                            <button id=${newBook.id} class="remove_btn">Remove</button>
                          </div>
                        `;
  listOfBooks.appendChild(listItem);
  const listB = document.getElementById(`${newBook.id}`);
  listB.addEventListener('click', () => {
    const deletedBook = document.getElementById(newBook.id);
    deletedBook.parentNode.removeChild(deletedBook);
    arr.removeBook(newBook.id);
  });
}
