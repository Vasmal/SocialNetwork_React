import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  let posts =[
    {text: 'Hi, how are you?'},
    {text: 'My first post'},
    {text: 'My second message'},
  ];
return (
    <div className={classes.posts}>
      <div className={classes.list}>
        {posts.map(post => <Post message={post.text} />)}
      </div>
    </div>
  );
}

export default MyPosts;