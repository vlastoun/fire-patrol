import * as React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div>
    <h1>Hlavni</h1>
    <Link to="test">Menu 1</Link>
    <Link to="/1/02">Test mapy</Link>
  </div>
);

export default MainMenu;
