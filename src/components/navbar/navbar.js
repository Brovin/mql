import React from 'react';
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;