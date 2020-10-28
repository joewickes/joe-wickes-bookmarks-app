const baseUrl = 'https://thinkful-list-api.herokuapp.com/joewickes/bookmarks';

function getBookmarks() { // returns an array of current objects
  //return the results of this function
  // fetch the api
  return fetch(baseUrl)
    // if it successfully fetches, parse the response
    .then(response => response.json());
}

function createBookmark() {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: 'a Bookmark', url: 'https://example.com', rating: 4}),
  })
    .then(response => response.json())
    .then(log => console.log(log))
    .catch(error => console.log(error))
  ;
}


export default {
  baseUrl,
  getBookmarks,
  createBookmark,
};

