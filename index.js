import BookShelf from './modules/class.js';
import {
  formBtn, navLinks, sections, time,
} from './modules/selectors.js';
import {displayBooks, handleSubmit, navigationHandler} from './modules/controller.js';
import { dt, f } from './modules/displayTime.js';

const {
  year, hour, minute, second,
} = dt.c;

const date = dt.setLocale('en-US').toLocaleString(f);

time.innerHTML = `${date}, ${year}, ${hour}:${minute}:${second}`;

const booksArray = new BookShelf();
window.onload = displayBooks(booksArray);
navigationHandler(navLinks, sections);
formBtn.addEventListener('click', () => handleSubmit(booksArray));
