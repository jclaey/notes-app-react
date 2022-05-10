import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ note }) => {
  return (
    <div key={note.id}>
      <Link to={`/edit/${note.id}`}>
        <h5>{note.title}</h5>
      </Link>
      <p>{note.body}</p>
      <hr />
    </div>
  );
};

export default ListItem;