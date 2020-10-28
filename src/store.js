const bookmarks = [];

let error = null;

const findWithId = id => this.bookmarks.find(bookmark => bookmark.id === id);

const addBookmark = bookmark => {
  this.bookmarks.push(bookmark);
};

const findAndEdit = (id, newInfo) => {
  const found = this.findWithId(id);
  // Object.assign?
};

const findAndDelete = id => {

};

export default {
  bookmarks,
  error,
  findWithId,
  addBookmark,
  findAndEdit,
  findAndDelete,
};