import React from 'react';

const SearchPage = () => {
  return (
    <>
      <h1>Search Notes</h1>
      <form>
        <label>
          <span className='label-body'>Search by title</span>
          <input type="checkbox" id="title" />
        </label>
        <label htmlFor="body">
          <span className='label-body'>Search by content</span>
          <input type="checkbox" id="body" />
        </label>
        <label htmlFor="search">
          <strong>Search term</strong>
        </label>
        <input type="text" id="search" placeholder="Enter search term..."></input>
        <div id="buttons">
          <button id="search-btn">Search</button>
          <button id="clear-btn">Clear Search</button>
        </div>
      </form>
    </>
  );
};

export default SearchPage;