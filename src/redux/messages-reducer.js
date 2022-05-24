const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 5,
      message : state.newMessageText
    }
    state.dialogText.push(newMessage);
    state.newMessageText = '';

  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      state.newMessageText = action.newMessage;
  }
  return state;
}

export const addMessageActionCreate = () => {
  return {type: ADD_MESSAGE};
}

export const updateNewMessageTextActionCreate = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text};
}

export default messagesReducer;