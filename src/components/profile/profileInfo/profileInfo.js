import React from 'react';
import Preloader from "../../common/preloader";
import ProfileStatus from "./profileStatus";
import userPhoto from '../../../assets/images/image.jpg';
import styles from './profileInfo.module.css';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
       props.savePhoto(e.target.files[0]);
    }
  };
  
  return(
    <div className={styles.profileInfo}>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <img src={props.profile.photos.large || userPhoto} alt=""/>
      {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
    </div>
  )
};

export default ProfileInfo;