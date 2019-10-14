import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../../assets/images/image.jpg';

let User = (props) => {
  return(
    <div className={styles.user}>
      <div>
        <img
          src={props.photos.small != null ? props.photos.small : userPhoto} alt="" />
      </div>
      <span>{props.name}</span>
    </div>
  )
};

export default User;