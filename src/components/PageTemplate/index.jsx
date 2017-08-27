import * as React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const style = {
  MainDiv: {
    paddingTop: '5em',
    maxWidth: '650px',
  },
};

const PageTemplate = (props) => (
  <Container id="notscale" style={style.MainDiv}>
    {React.Children.toArray(props.children)}
  </Container>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageTemplate;
