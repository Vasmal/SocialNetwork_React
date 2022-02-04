import React from 'react';
import classes from './Post.module.css';

function Post(props) {
  debugger;
return (
    <div className={classes.post}>
      <p>
        {props.message}
      </p>
      <span>likes: {props.likes}</span>
    </div>
  );
}

export default Post;