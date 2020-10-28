import cuid from 'cuid';
import api from './api';

const localBookmarks = [{title: 'First thing', rating: 5},{title: 'Second thing', rating: 4}];
const a = 'howdy';

let error = null;

function createStoreArray(apiBookmarks) { //Works
  apiBookmarks.forEach(bookmark => {
    this.localBookmarks.push(bookmark);
  });
}

console.log('store connected');

export default {
  a,
  localBookmarks,
  createStoreArray,
};