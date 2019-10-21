import React from 'react';
import Preloader from "../../common/preloader";
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return(
    <div>
      <ProfileStatus status={'Hello'} />
    </div>
  )
};

export default ProfileInfo;