import { useState } from "react";
import axios from 'axios'


const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const axios_response = await axios.get(`${API_URL}/search/users?q=${query}`)
    return axios_response.data.items
  } catch (e) {
    throw new Error(e);
  }
}

export default function GitSearch() {
  const [results, setResults] = useState([]);

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(event.target.nametext.value);
    setResults(results);
  }

  return (
    <div className="app">
      <main className="main">
        <h2>Project 5: GitHub User Search</h2>
        <Form
          onSubmit={onSearchSubmit}
        />
        <h3>Results</h3>
        <div id="results">
          <div>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function User({ avatar, url, username }) {
  return (
    <div className="user">
      <img src={avatar} alt="Profile" width="50" height="50" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  );
}

function Form({ onSubmit }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        name="nametext"
      />
      <button type="submit">Search</button>
    </form>
  );
}
