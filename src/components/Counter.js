import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount || 50
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  increment10 = () => {
    this.setState({
      count: this.state.count + 10
    });
  };
  increment100 = () => {
    this.setState({
      count: this.state.count + 100
    });
  };
  increment1000000 = () => {
    this.setState({
      count: this.state.count + 1000000
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  decrement10 = () => {
    this.setState({
      count: this.state.count - 10
    });
  };
  decrement100 = () => {
    this.setState({
      count: this.state.count - 100
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.decrement10}>-</button>
        <button onClick={this.decrement100}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.increment10}>+</button>
        <button onClick={this.increment100}>+</button>
        <button onClick={this.increment1000000}>+</button>
      </div>
    );
  }
}

export default Counter;
