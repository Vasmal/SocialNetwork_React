import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Friends.module.css'

const FriendOnline = (props) => {
let path = '/friends/' + props.id;
const setActive = ({isActive}) => isActive ? `${classes.friend} ${classes.active}` : classes.friend;
  return (
    <NavLink to={path} className={setActive}>
      <span className={classes.image}><img src="" alt="" /></span>
      <span id={props.id} className={classes.friendName}>{props.name}</span>
    </NavLink>
  );
} 

export default FriendOnline;