import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer class App extends Component {
  handleDec = () =>{
    this.props.store.handleDec();
  }
  handleInc = () =>{
    this.props.store.handleInc();
  }
  render() {
    return (
      <div className="App">
        <DevTools />
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Counter</h2>
        <div>
          <p>Count: {this.props.store.count} </p>
          <button onClick={this.handleDec}> - </button>
          <button onClick={this.handleInc}> + </button>
        </div>
      </div>
    );
  }
}

export default App;
