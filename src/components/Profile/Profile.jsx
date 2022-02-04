import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
return (
    <div className='content profile'>
      <div className={classes.background}>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="background image" />
      </div>
      <div className={classes.description}>
        ava + descr
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;