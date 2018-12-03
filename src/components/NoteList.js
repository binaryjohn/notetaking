import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const NoteList = props => (
  <div className="navigation">
    <div className="newNote">
      <Link to={`/new`}>&oplus;</Link>
    </div>
    <ul>
      {props.notes.map(note => (
        <li key={note.id}>
          <Link to={`/${note.id}`} key={note.id}>
            {note.summary}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

NoteList.proptypes = {
  notes: PropTypes.array,
};

export default NoteList;
