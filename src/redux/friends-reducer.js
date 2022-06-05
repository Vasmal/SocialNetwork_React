let initialState = {
  online: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Barbara'},
    {id: 3, name: 'Alla'},
    {id: 4, name: 'Max'}
  ]
}

const friendsReducer = (state = initialState, action) => {
  let stateCopy = {...state};
  stateCopy.online = [...state.online];
  return stateCopy;
}


export default friendsReducer;