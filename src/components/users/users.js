import React from 'react';
import styles from './users.module.css';
import User from "./user";
import axios from "axios";


class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  }

  render() {
    return(
      <div className={styles.users}>
        <h1>Users</h1>
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