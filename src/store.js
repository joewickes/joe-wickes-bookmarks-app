const localBookmarks = [];
let adding = false;
let error = null;
let filter = 0;

function createStoreArray(apiBookmarks) { //Works
  apiBookmarks.forEach(bookmark => {
    this.localBookmarks.push(bookmark);
  });
  addExpandToBookmarks(this.localBookmarks);
}

function addNewBookmark(obj) {
  this.localBookmarks.push(obj);
}

function addExpandToBookmarks(localBookmarksArray) {
  localBookmarksArray.forEach(bookmark => {
    bookmark.expanded = false;
  });
}

function findIndex(id) {
  return this.localBookmarks.indexOf(this.localBookmarks.find(bookmark => bookmark.id === id));
}

function toggleExpanded(index) {
  if (this.localBookmarks[index].expanded) {
    this.localBookmarks[index].expanded = false;
  } else if (!this.localBookmarks[index].expanded) {
    this.localBookmarks[index].expanded = true;
  }
}

export default {
  localBookmarks,
  adding,
  error, 
  filter,
  createStoreArray,
  addNewBookmark,
  findIndex,
  toggleExpanded,
};