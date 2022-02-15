import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';


const Dialog = (props) => {
  const setActive = ({isActive}) => isActive ? `${classes.dialog} ${classes.active}` : classes.dialog;

  let path = '/dialogs/' + props.id;
  return (
    <NavLink to={path} className={setActive}>
      <span className={classes.img}><img src="" alt="" /></span>
      <span className={classes.name}>{props.name}</span>
    </NavLink>
  );
}

export default Dialog;