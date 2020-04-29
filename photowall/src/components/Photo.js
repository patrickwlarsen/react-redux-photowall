import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              props.removePost(props.index);
            }}
          >
            Remove
          </button>
        </div>
      </figcaption>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired
};

export default Photo;
