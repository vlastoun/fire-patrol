import * as React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const PageTemplate = (props) => (
  <Container
    id="notscale"
    style={{
      paddingTop: '60px',
    }}
  >
    {React.Children.toArray(props.children)}
  </Container>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageTemplate;
