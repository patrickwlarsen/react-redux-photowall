//remove post
export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index
  };
}

//adding post
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  };
}
