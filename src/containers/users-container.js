import {connect} from 'react-redux';
import * as usersActions from '../actions/users-actions';
import Users from "../components/users";

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
};

const usersContainer = connect(mapStateToProps, usersActions)(Users);

export default usersContainer;