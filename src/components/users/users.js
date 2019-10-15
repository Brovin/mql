import React from 'react';
import styles from './users.module.css';
import User from "./user";
import axios from "axios";


class Users extends React.Component {

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
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return(
      <div className={styles.users}>
        <h1>Users</h1>
        <div>
          {pages.map(page => <span
            className={this.props.currentPage === page ? styles.selectedPage : null}
            key={page}
            onClick={() => this.onPageChanged(page)}
          >{page}</span>)}
        </div>
        {this.props.users.map(user =>
          <User
            user={user}
            key={user.id}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </div>
    )
  }
}

export default Users;