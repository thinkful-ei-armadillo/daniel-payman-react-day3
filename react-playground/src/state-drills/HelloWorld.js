import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  };

  handleClick = input => {
    this.setState({ who: input });
  };

  render() {
    return (
      <div className="helloWorld">
        <button onClick={() => this.handleClick('world')} className="world">
          World
        </button>
        <button onClick={() => this.handleClick('friend')} className="friend">
          Friend
        </button>
        <button onClick={() => this.handleClick('React')} className="react">
          React
        </button>

        <p>Hello, {this.state.who}!</p>
      </div>
    );
  }
}

export default HelloWorld;
