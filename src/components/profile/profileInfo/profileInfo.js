import React from 'react';

const ProfileInfo = (props) => {
  return(
    <div>
      <img src={props.profile.photos.large} alt="" />
    </div>
  )
};

export default ProfileInfo;