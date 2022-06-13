import React from "react";
import styles from './Users.module.css';

const Users = (props) => {
  return (
    <div className={styles.users}>
      <h1 className={styles.title}>Users</h1>
      {
        props.users.map( u => <div className={styles.user} key="u.id">
          <div className={styles.user__logo}>
            <span className={styles.user__img}><img src="" alt="" /></span>
            { u.followed 
                ? <button className={`${styles.btn} ${styles.btn_red}`} onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> 
                : <button className={`${styles.btn} ${styles.btn_blue}`} onClick={ () => {props.follow(u.id)} }>Follow</button>}
          </div>
          <div className={styles.user__info}>
            <div className={styles.user__left}>
              <p className={styles.user__name}>
                {u.name}
              </p>
              <p className={styles.user__status}>
                {u.status}
              </p>
            </div>
            <div className={styles.user__location}>
              <p className={styles.user__country}>
                {u.location.country}
              </p>
              <p className={styles.user__city}>
                {u.location.city}
              </p>
            </div>
          </div>
        </div>)
      }
    </div>
  );
}

export default Users;