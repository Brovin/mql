import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from "./profileInfo";

const Profile = (props) => {
  return(
    <div className={styles.profile}>
      <h1>Profile</h1>
      <ProfileInfo profile={props.profile} />
    </div>
  )
};

export default Profile;