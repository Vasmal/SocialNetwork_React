import React from 'react';
import classes from './Dialogs.module.css';

function Dialogs(props) {
  return (
    <div className={classes.dialogs}>
      <div className={classes.title}>
        Available dialogs
      </div>
      <div className={classes.content}>
        <div className={classes.list}>
          <div className={classes.dialog}>
            <div className={classes.img}><img src="" alt="" /></div>
            <div className={classes.name}>Sergey</div>
          </div>
          <div className={classes.dialog}>
            <div className={classes.img}><img src="" alt="" /></div>
            <div className={classes.name}>Sveta</div>
          </div>
          <div className={classes.dialog}>
            <div className={classes.img}><img src="" alt="" /></div>
            <div className={classes.name}>Victor</div>
          </div>
          <div className={classes.dialog}>
            <div className={classes.img}><img src="" alt="" /></div>
            <div className={classes.name}>Dima</div>
          </div>
        </div>

        <div className={classes.messages}>
          <div className={classes.message}>ergerertg ergerertg ergerertg ergerertg ergerertg ergerertg ergerertg ergerertg</div>
          <div className={classes.message}>ergerertg</div>
          <div className={classes.message}>ergerertg</div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;