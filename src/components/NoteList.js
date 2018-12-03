import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const NoteList = props => (
  <div class="navigation">
    <div class="newNote">
      <Link to={`/new`}>+</Link>
    </div>
    <ul>
      {props.notes.map(note => (
        <li>
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
