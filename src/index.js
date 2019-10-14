import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';
import {HashRouter} from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>, document.getElementById('root'));
