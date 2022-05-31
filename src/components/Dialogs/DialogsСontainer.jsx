import React from 'react';
import { addMessageActionCreate, updateNewMessageTextActionCreate } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';


function DialogsContainer(props) {
  let messages = props.store.getState().messages;
  let dialogs = messages.dialogs;
  let dialogText = messages.dialogText;
  let newMessageText = messages.newMessageText;

  let addMessage = () => {
    props.store.dispatch( addMessageActionCreate() )
  }

  let onMessageChange = (text) => {
    props.store.dispatch( updateNewMessageTextActionCreate(text) )
  }

  return (
    <Dialogs dialogs={dialogs} dialogText={dialogText} newMessageText={newMessageText} updateNewMessageText={onMessageChange} addMessage={addMessage} />
  );
}

export default DialogsContainer;