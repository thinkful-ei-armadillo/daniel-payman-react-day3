import React from 'react';

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  handleTrigger = () => {
    this.setState( 
      {spinningTheChamber: true}
      )
    this.interval = setInterval(() => {
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber: false
      });
      clearInterval(this.interval);
    }, 2000);
  }

  generateText = () => {
    if (this.state.spinningTheChamber) {
      return <p>spinning the chamber and pulling the trigger! ...</p>;
    }
    else if (this.state.chamber === this.props.bulletInChamber) {
      return <h2>BANG!!!!</h2>;
    }
    else {
      return <p>you're safe!</p>;
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="helloWorld">
        <button onClick={this.handleTrigger} className="pull">Pull the Trigger</button>
        {this.generateText()}
      </div>
    );
  }
}

export default RouletteGun;
