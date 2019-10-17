import React from 'react';
import styles from './profile.module.css';

const Profile = (props) => {
  return(
    <div className={styles.profile}>
      <h1>Profile</h1>
      {console.log(props.profile.fullName)}
    </div>
  )
};

export default Profile;