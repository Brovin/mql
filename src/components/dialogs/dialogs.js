import React from 'react';
import DialogItem from "./dialog-item";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

  let addNewMessage = (values) => {
    console.log(values.newMessageBody)
  };

  return(
    <div>
      <div>
        <h1>Dialogs</h1>
        {props.messages.map(message=> <DialogItem
          message={message.message}
          key={message.id}
        />)}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
};

const AddMessageForm = (props) => {
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;