import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import {Main, Root} from './components';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import firebase from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitNewNote = this.submitNewNote.bind(this);
    this.editNoteDetail = this.editNoteDetail.bind(this);
    this.editNoteSummary = this.editNoteSummary.bind(this);
    this.state = {notes: []};
  }

  componentDidMount() {
    const myNotesRef = firebase.database().ref(`notes/abcd`);
    myNotesRef.on('value', snap => {
      const notesObj = snap.val();
      const notes = Object.keys(notesObj).map(key => {
        return {...notesObj[key], ...{key}};
      });
      this.setState({notes});
    });
  }

  submitNewNote(noteObj) {
    const key = firebase
      .database()
      .ref()
      .push().key;
    const updates = {};
    const id = this.state.notes.length + 1;
    updates[key] = {...noteObj, ...{id}};
    return firebase
      .database()
      .ref(`notes/abcd`)
      .update(updates);
  }
  editNoteSummary(noteEditObj) {
    return firebase
      .database()
      .ref(`notes/abcd/${noteEditObj.key}`)
      .update({summary: noteEditObj.summary});
  }
  editNoteDetail(noteEditObj) {
    return firebase
      .database()
      .ref(`notes/abcd/${noteEditObj.key}`)
      .update({detail: noteEditObj.detail});
  }
  render() {
    return (
      <Router>
        <Root>
          <NoteList notes={this.state.notes} />
          <Main>
            <Route path="/" component={Home} exact={true} />
            <Route
              exact
              path="/new"
              render={() => <NewNote handleSubmit={this.submitNewNote} />}
            />
            <Route
              path="/:noteId"
              render={({match}) => (
                <Detail
                  editSummary={this.editNoteSummary}
                  editDetail={this.editNoteDetail}
                  note={this.state.notes.find(n => n.id == match.params.noteId)}
                />
              )}
            />
          </Main>
        </Root>
      </Router>
    );
  }
}

export default App;
