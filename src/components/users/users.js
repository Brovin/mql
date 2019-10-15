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

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return(
      <div className={styles.users}>
        <h1>Users</h1>
          {pages.map(page => <span
            className={this.props.currentPage === page && styles.selectedPage}
            key={page}
            onClick={() => this.props.setCurrentPage(page)}
          >{page}</span>)}
        {this.props.users.map(user =>
          <User
            key={user.id}
            photos={user.photos}
            name={user.name}
          />
        )}
      </div>
    )
  }
}

export default Users;