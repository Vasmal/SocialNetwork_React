import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';


// function MyPostsContainer(props) {
// let posts = props.store.getState().profile.posts;

// return <MyPosts posts={posts} />
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts
  }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts)

export default MyPostsContainer;