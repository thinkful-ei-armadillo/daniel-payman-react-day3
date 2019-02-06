import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  };

  handleClickWorld = () => {
    this.setState({ who: 'world' });
  };

  handleClickFriend = () => {
    this.setState({ who: 'friend' });
  };

  handleClickReact = () => {
    this.setState({ who: 'react' });
  };

  render() {
    return (
      <div className="helloWorld">
        <button onClick={this.handleClickWorld} className="world">
          World
        </button>
        <button onClick={this.handleClickFriend} className="friend">
          Friend
        </button>
        <button onClick={this.handleClickReact} className="react">
          React
        </button>

        <p>Hello, {this.state.who}!</p>
      </div>
    );
  }
}

export default HelloWorld;
