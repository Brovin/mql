import React from 'react';
import DialogItem from "./dialog-item";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/forms-controls/forms-controls";

const Dialogs = (props) => {

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
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

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            name="newMessageBody"
            placeholder="Enter your message"
            validate={[required, maxLength50]}
          />
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