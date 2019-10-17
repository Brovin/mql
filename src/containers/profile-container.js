import React from 'react';
import {connect} from 'react-redux';
import * as profileAction from '../actions/profile-actions';
import axios from 'axios';
import Profile from "../components/profile";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return(
      <div>
        <Profile {...this.state} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile.profile
});

export default connect(mapStateToProps, profileAction)(ProfileContainer);
