const BASEURL = 'https://thinkful-list-api.herokuapp.com/joewickes/bookmarks';

// Create a function to fetch any kind of fetch request
const fetchAndParse = (...args) => {
  return fetch(...args)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(parsed => {
      console.log(parsed);
    })
}

// Create a function to catch any error??


export default {
  BASEURL,
  fetchAndParse,

};