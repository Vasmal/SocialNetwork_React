const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    {id: 1, followed: true, name: 'Alex', status: 'I\'m boss', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2, followed: false, name: 'Barbara', status: 'I\'m designer', location: {city: 'Los Angeles', country: 'USA'}},
    {id: 3, followed: true, name: 'Alla', status: 'I\'m developer', location: {city: 'Moscow', country: 'Russia'}},
    {id: 4, followed: false, name: 'Max', status: 'I\'m manager', location: {city: 'Kiev', country: 'Ukraine'}}
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case (FOLLOW): {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id == action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    }
    case (UNFOLLOW): {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id == action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    }
    case (SET_USERS): {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }
    default: 
      return state
  }
}

export const folowAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});


export default usersReducer;