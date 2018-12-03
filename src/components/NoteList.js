import React from 'react'; 
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const NoteList = props => (
    <ul>
        {props.notes.map(note =>
        <li>
            <Link to={`/${note.id}`} key={note.id}>
                {note.summary}
            </Link>
        </li>
        )}
    </ul>
)

NoteList.proptypes ={
    notes: PropTypes.array
}

export default NoteList
