import React from 'react';
import { addMessageActionCreate, updateNewMessageTextActionCreate } from '../../../redux/state';
import classes from './../Dialogs.module.css';




const NewMessage = (props) => {
  let newText = React.createRef();
  
  let addMessage = (e) => {
  
    if (e.key === 'Enter'){
      e.preventDefault();
    }
    if(e.key === 'Enter' && props.newMessageText) {
      props.dispatch( addMessageActionCreate() )
    }
  }

  let onMessageChange = () => {
    let text = newText.current.value;
    props.dispatch( updateNewMessageTextActionCreate(text) )
  }

  return (
    <textarea onChange={onMessageChange} onKeyDown={addMessage} value={props.newMessageText} ref={newText} className={classes.newText}></textarea>
  )
}

export default NewMessage;