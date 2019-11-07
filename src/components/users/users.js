import React from 'react';
import styles from './users.module.css';
import User from "./user";
import Paginator from "../common/paginator";

const Users = React.memo(props => {
  return (
    <div className={styles.users}>
      <h1>Users</h1>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {props.users.map(user =>
        <User
          user={user}
          key={user.id}
          follow={props.follow}
          unfollow={props.unfollow}
          toggleIsFollowingProgress={props.toggleIsFollowingProgress}
          followingInProgress={props.followingInProgress}
        />
      )}
    </div>
  )
});

export default Users;