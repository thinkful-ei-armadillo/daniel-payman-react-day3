import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
};

handleClickWorld = () => {
    // State is updated to who: 'world' using setState
    this.setState({
        who: 'world'
    });
};

handleClickFriend = () => {
    // State is updated to who: 'friend' using setState
    this.setState({
        who: 'friend'
    });
};

handleClickReact = () => {
    // State is updated too who: 'react' using setState
    this.setState({
        who: 'react'
    });
};

render() {
    return (
        <div className="helloWorld">
            <button onClick={this.handleClickWorld} className="world-button">World</button>
            <button onClick={this.handleClickFriend} className="friend-button">Friend</button>
            <button onClick={this.handleClickReact} className="react-button">React</button>

            {/* Conditional rendering: show the p if state.who equals string state */}
            {this.state.who === 'world' && <p>Hello, world!</p>}
            {this.state.who === 'friend' && <p>Hello, friend!</p>}
            {this.state.who === 'react' && <p>Hello, React!</p>}
        </div>
    );
  }
}

export default HelloWorld;