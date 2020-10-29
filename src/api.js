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
    .then(response => response.json())
  ;
}


export default {
  baseUrl,
  getBookmarks,
  createBookmark,
};

