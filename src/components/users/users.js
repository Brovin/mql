import React from 'react';
import styles from './users.module.css';
import User from "./user";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return(
    <div className={styles.users}>
      <h1>Users</h1>
      <div>
        {pages.map(page => <span
          className={props.currentPage === page ? styles.selectedPage : null}
          key={page}
          onClick={() => props.onPageChanged(page)}
        >{page}</span>)}
      </div>
      {props.users.map(user =>
        <User
          user={user}
          key={user.id}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      )}
    </div>
  )
};

export default Users;