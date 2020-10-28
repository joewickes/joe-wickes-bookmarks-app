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

export default {
  localBookmarks,
  adding,
  error, 
  filter,
  createStoreArray,
};