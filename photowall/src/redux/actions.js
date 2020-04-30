import { database } from '../database/config';

//start adding post
export function startAddingPost(post) {
  return (dispatch) => {
    return database
      .ref('posts')
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//start loading posts
export function startLoadingPosts() {
  return (dispatch) => {
    return database
      .ref('posts')
      .once('value')
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      });
  };
}

//remove post
export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index
  };
}

//add post
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  };
}

//add comment
export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  };
}

//load posts
export function loadPosts(posts) {
  return {
    type: 'LOAD_POSTS',
    posts
  };
}
