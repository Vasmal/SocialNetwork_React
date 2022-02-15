import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
// import dialogData from './dialogData';
// import messagesData from './messagesData';

function Dialogs(props) {
let dialogData = props.messages.dialogs;
let messagesData = props.messages.dialogText;

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