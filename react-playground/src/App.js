import React, { Component } from 'react';
import Messages from './Messages';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>APPLICATION NAME!</h1>
        <HelloWorld name="helloWorld" />
        <Bomb />
      </div>
    );
  }
}

export default App;
