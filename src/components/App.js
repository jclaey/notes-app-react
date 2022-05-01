import React from 'react';
import Navbar from './Navbar';
import NoteForm from './NoteForm';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <NoteForm />
    </div>
  );
};

export default App;