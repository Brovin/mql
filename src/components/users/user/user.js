import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../../assets/images/image.jpg';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

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
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
              withCredentials: true,
              headers: {
                "API-KEY" : "487439a0-76f3-4945-b287-8fcb16ccc57b"
              }
            }).then(response => {
              if(response.data.resultCode === 0) {
                unfollow(user.id)
              }
            });
          }}>Unfollow</button>
          : <button onClick={() => {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
              withCredentials: true,
              headers: {
                "API-KEY" : "487439a0-76f3-4945-b287-8fcb16ccc57b"
              }
            }).then(response => {
                if (response.data.resultCode === 0) {
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