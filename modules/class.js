import {handleStorage} from './controller.js';

export default class BookShelf {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    const newBook = { id: Math.random(), ...book };
    const newArray = this.books.concat([newBook]);
    handleStorage(newArray);
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    handleStorage(this.books);
  }
}
