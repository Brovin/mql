import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const names = [

];


ReactDOM.render(<App names={names}/>, document.getElementById('root'));
serviceWorker.unregister();