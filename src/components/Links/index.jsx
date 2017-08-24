import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class Links extends React.Component {
  render() {
    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item as={NavLink} exact to="/">Home</Menu.Item>
          <Menu.Item as={NavLink} to="/projects">Projekty</Menu.Item>
          <Menu.Item as={NavLink} to="/contact">Kontakt</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

Links.propTypes = {
};
export default Links;

