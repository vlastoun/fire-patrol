import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

const Links = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as={NavLink} exact to="/">Mapa budov</Menu.Item>
      <Menu.Item as={NavLink} to="/ladders">Žebříky</Menu.Item>
      <Menu.Item as={NavLink} to="/hydrants">Hydranty</Menu.Item>
    </Container>
  </Menu>
);

export default Links;

