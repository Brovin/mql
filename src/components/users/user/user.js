import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../../assets/images/image.jpg';
import {NavLink} from 'react-router-dom';
import {usersApi} from "../../../api/api";

let User = ({user, follow, unfollow}) => {
  return (
    <div className={styles.user}>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
        </NavLink>
      </div>
      <span>{user.name}</span>
      <div>
        {user.followed
          ? <button onClick={() => {
            usersApi.unfollow(user.id)
              .then(data => {
              if(data.resultCode === 0) {
                unfollow(user.id)
              }
            });
          }}>Unfollow</button>
          : <button onClick={() => {
            usersApi.follow(user.id)
              .then(data => {
                if (data.resultCode === 0) {
                  follow(user.id);
                }
              });
          }
          }>Follow</button>}
      </div>
    </div>
  )
};

export default User;