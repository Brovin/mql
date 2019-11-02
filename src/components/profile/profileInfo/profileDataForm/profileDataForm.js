import React from 'react';
import Contact from "../profileData/contact";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><button>Save</button></div>
      {error && <div>
        {error}
      </div>}
      <div>
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
    </form>
  )
};

export default ProfileDataForm;