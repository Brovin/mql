import React from 'react';
import styles from './app.module.css';
import Header from '../header';
import Navbar from '../navbar';
import {Route} from 'react-router-dom';
import ProfileContainer from '../../containers/profile-container';
import UsersContainer from '../../containers/users-container';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Navbar/>
      <div>
        <Route path='/profile' component={ProfileContainer} />
        <Route path='/users' component={UsersContainer} />
      </div>
    </div>
  );
};

export default App;
