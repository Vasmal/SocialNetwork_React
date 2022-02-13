import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';




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

const Message = (props) => {
  return (
    <div className={classes.message}>{props.text}</div>
  );
}


function Dialogs(props) {
  let dialogData = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'John'},
    {id: 5, name: 'Brad'},
  ];

  let messagesData = [
    {message: 'Hi'},
    {message: 'Yo'},
    {message: 'How are you?'},
    {message: 'I\'m fine'},
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.title}>
        Available dialogs
      </div>
      <div className={classes.content}>
        <div className={classes.list}>
          {dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
        </div>
        <div className={classes.messages}>
          {messagesData.map(elem => <Message text={elem.message}/>)}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;