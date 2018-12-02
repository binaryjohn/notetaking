import React from 'react';

const Detail = ({note}) => (
    <div> 
        <h1>{note.summary}</h1>
        <div>{note.detail}</div>
        <div>{note.created}</div>
    </div>
)

export default Detail;
