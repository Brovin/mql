import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../actions/auth-actions';
import Header from "../components/header";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userLogin: state.auth.login
});

export default connect(mapStateToProps, authActions)(HeaderContainer);