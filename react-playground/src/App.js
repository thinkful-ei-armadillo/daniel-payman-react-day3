import React, { Component } from 'react';
import Messages from './Messages';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';
import state from './state';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>APPLICATION NAME!</h1>
        <HelloWorld name="helloWorld" />
        <Bomb />
        <RouletteGun bulletInChamber={8} />
        <Accordion />
      </div>
    );
  }
}

export default App;
