
let state = {
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
    ]
  },

  profile: {
    posts: [
      {text: 'Hi, how are you?'},
      {text: 'My first post'},
      {text: 'My second message'},
    ]
  },

  friends: {
    online: [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Barbara'},
      {id: 3, name: 'Alla'},
      {id: 4, name: 'Max'}
    ]
  }
}



export default state;