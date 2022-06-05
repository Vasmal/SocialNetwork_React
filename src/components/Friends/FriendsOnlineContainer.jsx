import React from 'react';
import { connect } from 'react-redux';
import FriendsOnline from './FriendsOnline';

// const FriendsOnlineContainer = (props) => {
//   let online = props.store.getState().friends.online;
//     return (
//       <FriendsOnline online={online} />
//     );
// }

let mapStateToProps = (state) => {
  return {
    online: state.friends.online
  }
}

const FriendsOnlineContainer = connect(mapStateToProps)(FriendsOnline);

export default FriendsOnlineContainer;