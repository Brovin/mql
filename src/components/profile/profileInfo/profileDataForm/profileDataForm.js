import React from 'react';
import {createField, Input, Textarea} from "../../../common/forms-controls/forms-controls";
import {reduxForm} from "redux-form";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {props.error && <div>
        {props.error}
      </div>}
      <div>
        <div>
          <b>Full name: </b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
          <b>Looking for a job: </b>
          {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
          <b>My professional skills: </b>
          {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
          <b>About me: </b>
          {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
          <b>Contacts: </b>
          {Object.keys(props.profile.contacts).map(key => {
            return (
              <div key={key}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
              </div>
            )
          })}
        </div>
      </div>
    </form>
  )
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;