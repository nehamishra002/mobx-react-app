import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { observable } from 'mobx';

const appState = observable({
  count: 10,
})
appState.handleInc = () => {
  appState.count++;
}
appState.handleDec = () => {
  appState.count--;
}
ReactDOM.render(<App store={appState}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
