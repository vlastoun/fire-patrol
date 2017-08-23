import React from 'react';
import PropTypes from 'prop-types';
import MarkdownParser from '../MarkdownParser';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class Post extends React.Component {
  render() {
    const { title, body, description } = this.props.post;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <MarkdownParser data={body} />
      </div>
    );
  }
}

Post.propTypes = {
};
export default Post;
