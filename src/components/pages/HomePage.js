import React, { useState, useEffect } from 'react';
import NoteForm from '../NoteForm';

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('notes')) {
      localStorage.setItem('notes', '[]');
    } else {
      setNotes(JSON.parse(localStorage.getItem('notes')));
    }
  }, []);

  const onCreateSubmit = (e, title, body) => {
    e.preventDefault();
  
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
  
    const hasLength = storedNotes.length > 0 ? true : false;
  
    const note = {
      id: hasLength ? storedNotes[storedNotes.length - 1].id + 1 : 1,
      title,
      body
    };
  
    storedNotes.push(note);
    localStorage.setItem('notes', JSON.stringify(storedNotes));

    setNotes(storedNotes);
  };

  const renderedNotes = notes.map(note => {
    return (
      <div key={note.id}>
        <h5>{note.title}</h5>
        <p>{note.body}</p>
        <hr />
      </div>
    );
  });

   return (
     <>
       <h1>Create Note</h1>
       <NoteForm onCreateSubmit={onCreateSubmit} />
       <h3 style={{ marginBottom: '4rem' }}>My Notes</h3>
       {notes.length > 0 ? renderedNotes : <p>No notes yet.</p>}
     </>
   );
};

export default HomePage;