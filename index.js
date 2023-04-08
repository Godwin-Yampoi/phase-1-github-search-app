const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input');
  const searchTerm = searchInput.value;

  // make API request and display results
});
const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});

const data = await response.json();
const users = data.items;

// create HTML elements and add to the DOM to display the user information

const userList = document.querySelector('#user-list');
userList.addEventListener('click', async (event) => {
  if (event.target.tagName === 'LI') {
    const username = event.target.dataset.username;
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    const reposData = await reposResponse.json();
    const repos = reposData.map(repo => {
      return {
        name: repo.name,
        description: repo.description,
        url: repo.html_url
      }
    });
    
    // create HTML elements and add to the DOM to display the repositories
  }
});
const searchTypeButton = document.querySelector('#search-type-button');
let searchType = 'user'; // default to searching for users

searchTypeButton.addEventListener('click', () => {
  if (searchType === 'user') {
    searchType = 'repo';
    searchTypeButton.textContent = 'Search Users';
  } else {
    searchType = 'user';
    searchTypeButton.textContent = 'Search Repositories';
  }
});

// modify the code in the form event listener to make the appropriate API request based on the search type
const response = await fetch(`https://api.github.com/${searchType === 'user' ? 'search/users' : 'search/repositories'}?q=${searchTerm}`, {
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});
