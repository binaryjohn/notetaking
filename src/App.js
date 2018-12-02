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
      notes: [
        {summary:"Hello World"},
        {summary:"Goodybye Summer"},
        {summary:"Greet the Sun"},
        {summary:"Something Wicked this way comes"}
      ]
    }
  }

  componentDidMount() {
      console.log('mounting');
      firebase.database().ref(`notes/1234`);
      console.log(firebase);
  }
  submitNewNote(noteObj) {
    console.log(noteObj)
    const key = firebase.database().ref().push().key
    console.log(key);
    // firebase.database().ref(`notes/`);
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
