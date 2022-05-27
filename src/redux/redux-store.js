import { combineReducers, legacy_createStore } from "redux";
import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  messages: messagesReducer,
  profile: profileReducer,
  friends: friendsReducer
});

let store = legacy_createStore(reducers);

export default store;
