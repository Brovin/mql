import React from 'react';
import Preloader from "../../common/preloader";
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return(
    <div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <img src={props.profile.photos.large} alt=""/>
    </div>
  )
};

export default ProfileInfo;