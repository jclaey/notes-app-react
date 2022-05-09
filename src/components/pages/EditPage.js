import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditForm from '../EditForm';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const notes = JSON.parse(localStorage.getItem('notes'));
  const note = notes.find(item => item.id === Number(id));

  useEffect(() => {
    if (!note) {
      navigate('/');
    }
  }, [navigate, note]);

  const onEditSubmit = (e, title, body) => {
    e.preventDefault();
  
    note.title = title;
    note.body = body;

    localStorage.setItem('notes', JSON.stringify(notes));

    navigate('/');
  };

  return (
    <>
      <h1>Edit Note</h1>
      <EditForm onEditSubmit={onEditSubmit} note={note} />
    </>
  );
};

export default EditPage;