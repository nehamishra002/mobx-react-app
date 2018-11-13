import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observable } from 'mobx';
import { observer } from 'mobx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0,
    }
  }
  __handleDec = () => {
    this.setState({
      count : this.state.count - 1,
    })
  }
  __handleInc = () => {
    this.setState({
      count : this.state.count + 1,
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Counter</h2>
        <div>
          <p>Count: {this.state.count} </p>
          <button onClick={this.__handleDec}> - </button>
          <button onClick={this.__handleInc}> + </button>
        </div>
      </div>
    );
  }
}

export default App;
