import React from 'react';
import Contact from "./contact";

const ProfileData = (props) => {
  return(
    <div>
      {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
      <div>
        <b>Full name: </b>{props.profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b>{props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>My professional skills: </b>{props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me: </b>{props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map(key => {
          return <Contact key={key} ContactTitle={key} ContactValue={props.profile.contacts[key]} />
        })}
      </div>
    </div>
  )
};

export default ProfileData;