import { combineReducers, legacy_createStore } from "redux";
import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  messages: messagesReducer,
  profile: profileReducer,
  friends: friendsReducer,
  usersPage: usersReducer
});

let store = legacy_createStore(reducers);

export default store;
