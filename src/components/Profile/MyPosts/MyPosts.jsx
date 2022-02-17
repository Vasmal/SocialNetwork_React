import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
// import posts from './../posts.js';

function MyPosts(props) {
let posts = props.posts.map(post => <Post message={post.text} />);


return (
    <div className={classes.posts}>
      <div className={classes.list}>
        {posts.reverse()}
      </div>
    </div>
  );
}

export default MyPosts;