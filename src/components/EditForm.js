import React, { useState, useEffect } from 'react';

const CreateForm = ({ onEditSubmit, note }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (note) {
      document.querySelector('#title').value = note.title;
      document.querySelector('#body').value = note.body;
    }
  }, [note]);

  return (
    <form onSubmit={e => onEditSubmit(e, title, body)}>
      <label htmlFor='title'>
        <strong>Title</strong>
      </label>
      <input 
        className='u-full-width' 
        type="text" 
        id="title"
        placeholder='Enter note title...'
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor='body'>
        <strong>Body</strong>
      </label>
      <input 
        className='u-full-width' 
        type='text' 
        id='body' 
        placeholder='Enter note body...'
        onChange={e => setBody(e.target.value)}
        value={body}
      />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default CreateForm;