import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessage from './Message/NewMessage';


function Dialogs(props) {
  let dialogData = props.dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>);
  let messagesData = props.dialogText.map(elem => <Message text={elem.message}/>);
  return (
    <div className={classes.dialogs}>
      <div className={classes.title}>
        Available dialogs
      </div>
      <div className={classes.content}>
        <div className={classes.list}>
          {dialogData}
        </div>
        <div className={classes.messages}>
          <div className={classes.messagesText}>
            {messagesData}
          </div>
          <div className={classes.newMessage}>
            <NewMessage newMessageText={props.newMessageText} updateNewMessageText={props.updateNewMessageText} onAddMassage={props.addMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;