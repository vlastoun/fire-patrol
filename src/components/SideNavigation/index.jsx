import * as React from 'react';
import NavigationContent from '../../containers/NavigationContent';
import Logo from './logo_lenzing.svg';

const style = {
  parent: {
    display: 'flex',
    height: '100%',
  },
  narrow: {
    width: '250px',
    marginTop: '45px',
    paddingLeft: '1em',
    paddingRight: '1em',
    right: 0,
    top: 0,
    bottom: 0,
  },
  wide: {
    flex: 1,
    left: 0,
    top: 0,
    bottom: 0,
  },
};

const SideNavigation = (props) => (
  <div style={style.parent}>
    <div style={style.wide}>
      {props.children}
    </div>
    {
      window.innerWidth > 1200
        ? <div style={style.narrow}>
          <div>
            <img style={{width: '100%', marginBottom: '3em'}} src={Logo} alt="logo"/>
            <h3>Seznam objektů</h3>
            <NavigationContent />
          </div>
        </div>
        : null
    }
  </div>
);

export default SideNavigation;
