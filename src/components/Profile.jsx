import React from 'react';
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
      <div className={classes.posts}>
        My posts
        <div className={classes.new}>
          New post  
        </div>
        <ul className={classes.list}>
          <li className={classes.list_item}>Post 1</li>
          <li className={classes.list_item}>Post 2</li>
          <li className={classes.list_item}>Post 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;