import React from 'react';
import {connect} from 'react-redux';
import * as usersActions from '../actions/users-actions';
import axios from "axios";
import Users from "../components/users";

class usersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)});
  };

  render() {
    return(
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage
  }
};

export default connect(mapStateToProps, usersActions)(usersContainer);