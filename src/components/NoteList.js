import React from 'react'; 
import PropTypes from 'prop-types';
const NoteList = props => (
    <ul>
        {props.notes.map((note,index)=>
            <li key={index}>
                note.summary
            </li>)}
    </ul>
)

NoteList.proptypes ={
    notes: PropTypes.array
}

export default NoteList