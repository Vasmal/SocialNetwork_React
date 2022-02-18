import React from 'react';
import classes from './ProfileInfo.module.css';
import background from './../Images/profile_background.jpg';
import logo from './../Images/logo.jpg';

const ProfileInfo = (props) => {
  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    if(text) {
      props.addPost();
    }
  }

let updateNewPostText = () => {
  let text = newPost.current.value;
  props.updateNewPostText(text);
}

  return (
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
            <a className={classes.user__friends}>364 Contacts</a>
          </div>
        </div>
      </div>

      <div className={classes.new__post}>
        <textarea onChange={updateNewPostText} ref={newPost} className={classes.post__text} placeholder='New post' value={props.newPostText}/>
        <button onClick={addPost} className={classes.add__post}>Add post</button>
      </div>
    </div>
  );
}

export default ProfileInfo;