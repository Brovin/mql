import React from 'react';
import {connect} from 'react-redux';
import * as profileAction from '../actions/profile-actions';
import axios from 'axios';
import Profile from "../components/profile";
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    debugger
    return(
      <div>
        <Profile {...this.state} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, profileAction)(withRouter(ProfileContainer));
