import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

function Dialogs(props) {
  const setActive = ({isActive}) => isActive ? `${classes.dialog} ${classes.active}` : classes.dialog;
  return (
    <div className={classes.dialogs}>
      <div className={classes.title}>
        Available dialogs
      </div>
      <div className={classes.content}>
        <div className={classes.list}>
          <NavLink to='/dialogs/1' className={setActive}>
            <span className={classes.img}><img src="" alt="" /></span>
            <span className={classes.name}>Sergey</span>
          </NavLink>
          <NavLink to='/dialogs/2' className={setActive}>
            <span className={classes.img}><img src="" alt="" /></span>
            <span className={classes.name}>Sveta</span>
          </NavLink>
          <NavLink to='/dialogs/3' className={setActive}>
            <span className={classes.img}><img src="" alt="" /></span>
            <span className={classes.name}>Victor</span>
          </NavLink>
          <NavLink to='/dialogs/4' className={setActive}>
            <span className={classes.img}><img src="" alt="" /></span>
            <span className={classes.name}>Dima</span>
          </NavLink>
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