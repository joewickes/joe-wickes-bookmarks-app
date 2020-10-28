const baseUrl = 'https://thinkful-list-api.herokuapp.com/joewickes/bookmarks/';

const getBookmarks = () => {
  // fetch the api
  fetch(baseUrl)
    // if it successfully fetches, parse the response
    .then(response => response.json())
    // if it successfully parses the response, log it 
    .then(parsed => {
      console.log(parsed);
    });
};

console.log('api page connected');

export default {
  baseUrl,
  getBookmarks,
};

