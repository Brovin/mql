import React from 'react';
import styles from './app.module.css';
import Header from "../header";
import Navbar from "../navbar";
import {Route} from 'react-router-dom';
import Profile from "../profile";
import Users from "../users";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Navbar/>
      <div>
        <Route path='/profile' component={Profile} />
        <Route path='/users' component={Users} />
      </div>
    </div>
  );
};

export default App;
