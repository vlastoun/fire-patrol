import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Menu,
  Image,
} from 'semantic-ui-react';
import Logo from '../SideNavigation/logo_lenzing.svg';

const Links = () => (
  <Menu id="notscale" fixed="top" size="small">
    <Container>
      <Menu.Item as={NavLink} exact to="/">
        <Image height="30px" style={{ marginRight: '1.5em' }} src={Logo}/>
        Mapa budov
      </Menu.Item>
      <Menu.Item as={NavLink} to="/ladders">Žebříky</Menu.Item>
      <Menu.Item as={NavLink} to="/hydrants">Hydranty</Menu.Item>
      <Menu.Item as={NavLink} to="/buildingslist">
        Seznam budov
      </Menu.Item>
      <Menu.Item as={NavLink} to="/admin">Admin</Menu.Item>
    </Container>
  </Menu>
);

export default Links;

