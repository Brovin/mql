import React from 'react';
import Dialogs from "../components/dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import * as dialogsAction from '../actions/dialogs-actions';
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class DialogsContainer extends React.Component {
  render() {
    return (
      <Dialogs
        {...this.props}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    messages: state.dialogs.messages
  }
};

export default compose(
  connect(mapStateToProps, dialogsAction),
  withAuthRedirect
)(DialogsContainer);