import BookShelf from './modules/class.js';
import {
  formBtn, navLinks, sections, time,
} from './modules/selectors.js';
import { displayBooks, handleSubmit, navigationHandler } from './modules/controller.js';
import { DateTime } from './modules/luxon.js';

setInterval(() => {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  time.innerHTML = currentDate;
}, 1000);

const booksArray = new BookShelf();
window.onload = displayBooks(booksArray);
navigationHandler(navLinks, sections);
formBtn.addEventListener('click', () => handleSubmit(booksArray));
