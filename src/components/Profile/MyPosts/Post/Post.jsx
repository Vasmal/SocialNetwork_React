import React from 'react';
import classes from './Post.module.css';

function Post(props) {
return (
    <div className={classes.post}>
      <p>
        {props.message}
      </p>
      
    </div>
  );
}

export default Post;