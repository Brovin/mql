import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const names = [
  {id: 1, name: 'max'},
  {id: 2, name: 'alex'}
];


ReactDOM.render(<App names={names}/>, document.getElementById('root'));
serviceWorker.unregister();