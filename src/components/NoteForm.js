import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor='title'>
        <strong>Title</strong>
      </label>
      <input className='u-full-width' type="text" id="title" placeholder='Enter note title...' />
      <label htmlFor='body'>
        <strong>Body</strong>
      </label>
      <input className='u-full-width' type='text' id='body' placeholder='Enter note body...' />
    </form>
  );
};

export default Form;