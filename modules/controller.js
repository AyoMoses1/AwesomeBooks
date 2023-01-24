import { listOfBooks } from './selectors.js';

const displayBooks = (booksArray) => {
  const collection = JSON.parse(localStorage.getItem('books'));
  if (collection) {
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
  } else {
    booksArray.books = [];
  }
};

const handleSubmit = (arr) => {
  const title = document.querySelector('#book_title').value;
  const author = document.querySelector('#book_author').value;
  const index = Math.random();
  arr.addBook({ id: index, title, author });
  const collection = JSON.parse(localStorage.getItem('books'));
  arr.books = collection;
  const newBook = arr.books.filter((book) => book.id === index)[0];
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
    arr.removeBook(newBook.id);
    deletedBook.parentNode.removeChild(deletedBook);
  });
};

const navigationHandler = (navLinks, sections) => {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((li) => {
        li.classList.remove('active');
      });
      sections.forEach((section) => {
        section.classList.add('hide');
        const sectionId = section.getAttribute('id');
        const linkId = link.getAttribute('id');
        if (sectionId === `section-${linkId}`) {
          section.classList.remove('hide');
          link.classList.add('active');
        }
      });
    });
  });
};

const handleStorage = (data) => {
  localStorage.setItem('books', JSON.stringify(data));
};

export {
  handleStorage, navigationHandler, handleSubmit, displayBooks,
};