import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import {Main, Root} from './components';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import firebase from './utils';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
      const myNotesRef = firebase.database().ref(`notes/1234`);
      myNotesRef.on('value', snap => {
          const notesObj = snap.val()
          const notes = Object.keys(notesObj).map(key => {
                return {...notesObj[key], ...{id:key}}
          })
          this.setState({notes})
      })
  }
  submitNewNote(noteObj) {
    const key = firebase.database().ref().push().key
    const updates = {};
    updates[key] = noteObj;
    // firebase.database().ref(`notes/`);
    return firebase.database().ref(`notes/1234`).update(updates);
  }
  render() {
    return (
        <Router>
            <Root>
                <NoteList notes={this.state.notes}/>
                <Main>
                    <Route path="/" component={Home} exact/>
                    <Route path="/new" render={() => <NewNote handleSubmit={this.submitNewNote}/>}/>
                </Main>
            </Root>
        </Router>
    )
  }
}

export default App;
