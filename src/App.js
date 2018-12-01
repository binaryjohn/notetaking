import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import NoteList from './components/NoteList';
import {getRefInfo} from './utils';

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
      const refInfo = getRefInfo();
      console.log(refInfo);
  }
  render() {
    return (
        <div>
            <NoteList notes={this.state.notes}/>
            <Router>
                <Route path="/" component={Home}/>
            </Router>
        </div>
    )
  }
}

export default App;
