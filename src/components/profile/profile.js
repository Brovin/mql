import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from "./profileInfo";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <h1>Profile</h1>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
    </div>
  )
};

export default Profile;