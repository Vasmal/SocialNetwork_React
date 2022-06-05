import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreate, updateNewMessageTextActionCreate } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
  return {
    dialogs: state.messages.dialogs,
    dialogText: state.messages.dialogText,
    newMessageText: state.messages.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch( updateNewMessageTextActionCreate(text) );
    },
    addMessage: () => {
      dispatch( addMessageActionCreate() );
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;