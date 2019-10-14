import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';


ReactDOM.render(

        <App />
    , document.getElementById('root'));
