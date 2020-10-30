
const localBookmarks = [];
let adding = false;
let editing = false;
let edId = null;
let error = null;
let filter = 0;

function createStoreArray(apiBookmarks) { //Works
  apiBookmarks.forEach(bookmark => {
    this.localBookmarks.push(bookmark);
  });
  addExtrasToBookmarks(this.localBookmarks);
}

function addNewBookmark(obj) {
  this.localBookmarks.push(obj);
}

function addExtrasToBookmarks(localBookmarksArray) {
  localBookmarksArray.forEach(bookmark => {
    bookmark.expanded = false;
    bookmark.updated = false;
  });
}

function findById(id) {
  return localBookmarks.find(bookmark => bookmark.id === id);
}

function findIndex(id) {
  return localBookmarks.indexOf(localBookmarks.find(bookmark => bookmark.id === id));
}

function toggleExpanded(index) {
  if (this.localBookmarks[index].expanded) {
    this.localBookmarks[index].expanded = false;
  } else if (!this.localBookmarks[index].expanded) {
    this.localBookmarks[index].expanded = true;
  }
}

function changeBookmark(id, newInfo) {
  let curObj = findById(id);
  Object.assign(curObj, newInfo);
}

function removeBookmark(id) {
  const index = findIndex(id);
  localBookmarks.splice(index, 1);
}


export default {
  localBookmarks,
  adding,
  editing,
  error, 
  filter,
  createStoreArray,
  addNewBookmark,
  findById,
  findIndex,
  toggleExpanded,
  changeBookmark,
  removeBookmark,
};