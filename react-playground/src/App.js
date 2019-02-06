import React, { Component } from 'react';
import Messages from './Messages';
import HelloWorld from './state-drills/HelloWorld';
import './index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <HelloWorld name="helloWorld" />
      </div>
    );
  }
  
}

export default App;
