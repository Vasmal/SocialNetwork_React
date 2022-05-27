import React from 'react';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {
let posts = props.store.getState().profile.posts;

return <MyPosts posts={posts} />
}

export default MyPostsContainer;