import React from 'react';
import NoteForm from '../NoteForm';

const HomePage = () => {
   return (
     <>
       <h1>Create Note</h1>
       <NoteForm />
       <h3>My Notes</h3>
       <p>No notes yet.</p>
     </>
   );
};

export default HomePage;