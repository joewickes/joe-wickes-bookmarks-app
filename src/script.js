// Import jquery module
import $ from 'jquery';

// Import css modules (normalize to reset to basic css, style to add my own)
import 'normalize.css';
import './style.css';

// Import api and store modules to access their info
import api from './api';
import store from './store';
import bookLi from './bookmark-list';

function main() {
  console.log(store.localBookmarks);

  api.getBookmarks()
    .then(bookmarks => {
      store.createStoreArray(bookmarks);

    });

  console.log(store.localBookmarks);

  bookLi.renderMain();
}

$(main);