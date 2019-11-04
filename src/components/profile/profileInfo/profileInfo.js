import React, {useState} from 'react';
import Preloader from "../../common/preloader";
import ProfileStatus from "./profileStatus";
import userPhoto from '../../../assets/images/image.jpg';
import styles from './profileInfo.module.css';
import ProfileData from "./profileData";


const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
       props.savePhoto(e.target.files[0]);
    }
  };

  //Todo Реализовать goToEditMode и useState
  
  return(
    <div className={styles.profileInfo}>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <img src={props.profile.photos.large || userPhoto} alt=""/>
      <div>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      <ProfileData
        profile={props.profile}
        isOwner={props.isOwner}
        goToEditMode={props.goToEditMode}
      />
    </div>
  )
};

export default ProfileInfo;