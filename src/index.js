import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
