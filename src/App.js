import React, { Component } from 'react';
import './App.css';

import Calendar from './components/Calendar';
import List from './components/List';
import Popup from './components/Popup'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
