import * as React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () => (
  <div>
    <h1>Hlavni</h1>
    <NavLink to="/">Budovy</NavLink>
    <NavLink to="/ladders">Žebříky</NavLink>
    <NavLink to="/hydrants">Hydranty</NavLink>
  </div>
);

export default MainMenu;
