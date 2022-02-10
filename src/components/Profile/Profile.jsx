import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import background from './Images/profile_background.jpg';
import logo from './Images/logo.jpg';

function Profile() {
return (
    <div class={classes.profile}>
      <div className={classes.info}>
        <div className={classes.background}>
          <img src={background} alt="profile"  />
        </div>
        <div className={classes.description}>
          <div className={classes.user_logo}>
            <img src={logo} alt="user photo" />
          </div>
          <div className={classes.user__info}>
            <p className={classes.user__name}>Kristin W.</p>
            <div className={classes.user__data}>
              <p className={classes.user__location}>New York, United states</p>
              <a className={classes.user__friends}>364 Connections</a>
            </div>
          </div>
        </div>

        <div className={classes.new__post}>
          <textarea className={classes.post__text} placeholder='New post'></textarea>
          <button className={classes.add__post}>Add post</button>
        </div>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;