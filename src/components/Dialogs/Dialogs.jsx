import React from 'react';
import classes from './Dialogs.module.css';

function Dialogs(props) {
  return (
    <div className={classes.dialogs}>
      <div className={classes.list}>
        <div className={classes.dialog}>Sergey</div>
        <div className={classes.dialog}>Sveta</div>
        <div className={classes.dialog}>Victor</div>
        <div className={classes.dialog}>Dima</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>ergerertg</div>
      </div>
    </div>
  );
}

export default Dialogs;