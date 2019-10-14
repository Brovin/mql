import React from 'react';
import styles from './app.module.css';
import Header from "../header";
import Navbar from "../navbar";
import {Route} from 'react-router-dom';
import Profile from "../profile";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Navbar/>
      <div>
        <Route path='/profile' component={Profile} />
      </div>
    </div>
  );
};

export default App;
