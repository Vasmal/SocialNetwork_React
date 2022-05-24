const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const addMessage = 'ADD-MESSAGE';
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
  _state: {
    messages: {
      dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Brad'},
      ],
      dialogText: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'I\'m fine'},
      ],
      newMessageText: '',
    },
  
    profile: {
      posts: [
        {id: 1, text: 'Hi, how are you?'},
        {id: 2, text: 'My first post'},
        {id: 3, text: 'My second message'},
      ],
    
      newPostText: '',
    },
  
    friends: {
      online: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Barbara'},
        {id: 3, name: 'Alla'},
        {id: 4, name: 'Max'}
      ]
    }
  },
  _callSubscriber() {
    console.log('method for obserever');
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('method for obserever');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === addPost) {
      let newPost = {
        id: 4,
        text: this._state.profile.newPostText
      }
      this._state.profile.posts.push(newPost);
      this._state.profile.newPostText = '';
      this._callSubscriber(this._state);
      
    } else if (action.type === updateNewPostText) {
        this._state.profile.newPostText = action.newText;
        this._callSubscriber(this._state);

    } else if (action.type === addMessage) {
        let newMessage = {
          id: 5,
          message : this._state.messages.newMessageText
        }
        this._state.messages.dialogText.push(newMessage);
        this._state.messages.newMessageText = '';
        this._callSubscriber(this._state);

    } else if (action.type === updateNewMessageText) {
        this._state.messages.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
    }
  }
}

export const addMessageActionCreate = () => {
  return {type: addMessage}
}

export const updateNewMessageTextActionCreate = (text) => {
  return {type: updateNewMessageText, newMessage: text}
}

export const addPostActionCreate = () => {
  return {type: addPost}
}

export const updateNewPostTextActionCreate = (text) => {
  return {type: updateNewPostText, newText: text}
}

export default store;