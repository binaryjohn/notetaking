import React from 'react';

const Detail = ({note}) => (
  note ? (
    <div> 
      <h1>{note.summary}</h1>
      <div>{note.detail}</div>
      <div>{note.created}</div>
    </div>
  ): null
)

export default Detail;
