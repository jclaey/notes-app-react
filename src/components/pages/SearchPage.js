import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem';

const SearchPage = () => {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const [searchNotes, setSearchNotes] = useState(JSON.parse(localStorage.getItem('notes')));
  const [term, setTerm] = useState('');

  const titleInput = document.querySelector('#title');
  const bodyInput = document.querySelector('#body');

  const onClick = e => {
    e.preventDefault();

    if (term === '') {
      setSearchNotes([-2]);
    }

    if (titleInput.checked && bodyInput.checked) {
      setSearchNotes(notes.filter(note => note.title.toLowerCase().includes(term) || note.body.toLowerCase().includes(term)));
    } else if (titleInput.checked) {
      setSearchNotes(notes.filter(note => note.title.toLowerCase().includes(term)));
    } else if (bodyInput.checked) {
      setSearchNotes(notes.filter(note => note.body.toLowerCase().includes(term)));
    } else if (!titleInput.checked && !bodyInput.checked) {
      setSearchNotes([-1]);
    }
  };

  const renderedList = searchNotes.map(note => {
    return <ListItem note={note} key={note.id} />;
  });

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
        <input 
          type="text" 
          id="search" 
          placeholder="Enter search term..."
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <div id="buttons">
          <button 
            id="search-btn"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </form>
      <div>
        {searchNotes[0] === -1 ? 
          <p>Please choose to search by title, body, or both.</p>
        : searchNotes[0] === -2 ? 
          <p>Please enter a search term.</p> 
        : searchNotes.length === 0 ? 
        <div>
          <p>You have no notes.</p>
          <p>Create one <Link to='/'>here</Link></p>
        </div>
        : renderedList}
      </div>
    </>
  );
};

export default SearchPage;