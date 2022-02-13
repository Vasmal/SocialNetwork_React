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
  return (
    <div className={classes.dialogs}>
      <div className={classes.title}>
        Available dialogs
      </div>
      <div className={classes.content}>
        
        <div className={classes.list}>
          <Dialog name='Sergey' id="1"/>
          <Dialog name='Sveta' id="2"/>
          <Dialog name='Valera' id="3"/>
          <Dialog name='John' id="4"/>
          <Dialog name='Brad' id="5"/>
        </div>

        <div className={classes.messages}>
          <Message text='Hi'/>
          <Message text='Yo'/>
          <Message text='How are you?'/>
          <Message text="I'm fine"/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;