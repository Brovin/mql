import React from 'react';
import styles from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>Social Network</h1>
      <div>
        {props.isAuth
          ? <div>{props.userLogin} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'login'}>Login</NavLink>}
      </div>
    </header>
  )
};

export default Header;