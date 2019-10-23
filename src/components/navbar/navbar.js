import React from 'react';
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.item}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;