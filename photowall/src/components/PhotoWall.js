import React from 'react';
import Photo from './Photo';

function PhotoWall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((post, index) => (
        <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

export default PhotoWall;
