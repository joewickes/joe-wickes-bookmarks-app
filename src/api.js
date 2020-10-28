const baseUrl = 'https://thinkful-list-api.herokuapp.com/joewickes/bookmarks/';

const getBookmarks = () => { // returns an array of current objects
  //return the results of this function
  // fetch the api
  return fetch(baseUrl)
    // if it successfully fetches, parse the response
    .then(response => response.json());
};

console.log('api page connected');

export default {
  baseUrl,
  getBookmarks,
};

