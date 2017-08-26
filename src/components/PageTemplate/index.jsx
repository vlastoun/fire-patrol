import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const style = {
  MainDiv: { paddingTop: '5em' },
};

const PageTemplate = (props) => (
  <Container style={style.MainDiv}>
    {React.Children.toArray(props.children)}
  </Container>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageTemplate;
