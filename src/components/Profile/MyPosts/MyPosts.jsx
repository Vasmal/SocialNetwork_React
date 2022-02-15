import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
// import posts from './../posts.js';

function MyPosts(props) {
let posts = props.posts;

return (
    <div className={classes.posts}>
      <div className={classes.list}>
        {posts.map(post => <Post message={post.text} />)}
      </div>
    </div>
  );
}

export default MyPosts;