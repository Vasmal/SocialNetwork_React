import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
return (
    <div className={classes.posts}>
      <p>My posts</p>
      <div className={classes.new}>
        New post  
      </div>
      <div className={classes.list}>
        <Post message='Hi, how are you?' likes='1'/>
        <Post message='My first post' likes='5'/>
        <Post message='My second message' likes='3'/>
      </div>
    </div>
  );
}

export default MyPosts;