import bookmarkList from "./bookmark-list";

const baseUrl = 'https://thinkful-list-api.herokuapp.com/joewickes/bookmarks';

function getBookmarks() { // returns an array of current objects
  //return the results of this function
  // fetch the api
  return fetch(baseUrl)
    // if it successfully fetches, parse the response
    .then(response => response.json());
}

function createBookmark(newObj) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newObj,
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch(error => {
      console.log(error.message);
    })
  ;
}

function updateBookmark(id, editObj) {
  return fetch(baseUrl + `/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: editObj,
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch(error => {
      console.log(error.message);
    })
  ;
}

function deleteBookmark(id) {
  return fetch(baseUrl + `/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch(error => {
      console.log(error.message);
    })
  ;
}


export default {
  baseUrl,
  getBookmarks,
  createBookmark,
  updateBookmark,
  deleteBookmark,
};

