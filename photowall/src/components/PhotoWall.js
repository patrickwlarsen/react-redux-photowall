import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((post, index) => (
        <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

export default PhotoWall;
