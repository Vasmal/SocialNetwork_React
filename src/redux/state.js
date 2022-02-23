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
        {message: 'Hi'},
        {message: 'Yo'},
        {message: 'How are you?'},
        {message: 'I\'m fine'},
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

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('method for obserever');
  },

  addPost() {
    let newPost = {
      id: 4,
      text: this._state.profile.newPostText
    }
    this._state.profile.posts.push(newPost);
    this._state.profile.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profile.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      message : this._state.messages.newMessageText
    }
  
    this._state.messages.dialogText.push(newMessage);
    this._state.messages.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newMessage) {
    this._state.messages.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;