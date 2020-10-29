import cuid from 'cuid';
import api from './api';

const localBookmarks = [];
let adding = false;
let error = null;
let filter = 0;

function createStoreArray(apiBookmarks) { //Works
  apiBookmarks.forEach(bookmark => {
    this.localBookmarks.push(bookmark);
  });
}

function addNewBookmark(obj) {
  this.localBookmarks.push(obj);
}

export default {
  localBookmarks,
  adding,
  error, 
  filter,
  createStoreArray,
  addNewBookmark,
};