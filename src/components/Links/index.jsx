import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Menu,
  Button,
} from 'semantic-ui-react';

const Links = () => (
  <Menu id="notscale" fixed="top" size="small">
    <Container>
      <Menu.Item as={NavLink} exact to="/">Mapa budov</Menu.Item>
      <Menu.Item as={NavLink} to="/ladders">Žebříky</Menu.Item>
      <Menu.Item as={NavLink} to="/hydrants">Hydranty</Menu.Item>
      <Menu.Item as={Button} position="right">
        Seznam budov
      </Menu.Item>
    </Container>
  </Menu>
);

export default Links;

