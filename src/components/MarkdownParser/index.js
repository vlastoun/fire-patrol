import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import marksy from 'marksy';

const compile = marksy({
  createElement,
  elements: {
    h1({ id, children }) {
      return <h1>{children}</h1>;
    },
  },
});

const MarkdownParser = (props) => {
  let displayData;
  if (props.data) {
    displayData = props.data;
  } else {
    displayData = '';
  }
  const compiled = compile(displayData).tree;
  return (
    <div>
      {compiled}
    </div>
  );
};

MarkdownParser.propTypes = {
  data: PropTypes.string.isRequired,
};
export default MarkdownParser;
