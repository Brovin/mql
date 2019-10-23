import React from 'react';
import DialogItem from "./dialog-item";

const Dialogs = (props) => {
  return(
    <div>
      <h1>Dialogs</h1>
      {props.messages.map(message=> <DialogItem
        message={message.message}
        key={message.id}
      />)}
    </div>
  )
};

export default Dialogs;