import React from 'react';
import FriendOnline from './Friend/friendOnline';
import classes from './Friends.module.css';

const FriendsOnline = (props) => {
let online = props.online;
  return (
    <div className={classes.friendsOnline}>
      {online.map(friend => <FriendOnline name={friend.name} id={friend.id} />)}
    </div>
  );
}

export default FriendsOnline;