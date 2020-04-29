import postsData from '../data/posts';

const postReducer = function posts(state = postsData, action) {
  console.log(action.index);
  return state;
};

export default postReducer;
