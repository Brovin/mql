import React from 'react';
import styles from './app.module.css';
import Navbar from '../navbar';
import {Route} from 'react-router-dom';
import ProfileContainer from '../../containers/profile-container';
import UsersContainer from '../../containers/users-container';
import HeaderContainer from "../../containers/header-container";
import Login from "../login";

const App = () => {
  return (
    <div className={styles.app}>
      <HeaderContainer />
      <Navbar/>
      <div>
        <Route path='/profile/:userId?' component={ProfileContainer} />
        <Route path='/users' component={UsersContainer} />
        <Route path='/login' component={Login} />
      </div>
    </div>
  );
};

export default App;
