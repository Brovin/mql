import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../../assets/images/image.jpg';
import {NavLink} from 'react-router-dom';

let User = ({user, follow, unfollow}) => {
  return(
    <div className={styles.user}>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
        </NavLink>
      </div>
      <span>{user.name}</span>
      <div>
        {user.followed
        ? <button onClick={() => unfollow(user.id)}>Unfollow</button>
        : <button onClick={() => follow(user.id)}>Follow</button>}
      </div>
    </div>
  )
};

export default User;