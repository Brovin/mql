import {connect} from 'react-redux';
import * as usersActions from '../actions/users-actions';
import Users from "../components/users";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage
  }
};

const usersContainer = connect(mapStateToProps, usersActions)(Users);

export default usersContainer;