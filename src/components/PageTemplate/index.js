import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import Links from '../Links';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
const style = {
  MainDiv: { paddingTop: '5em' },
};

class PageTemplate extends React.Component {
  render() {
    return (
      <div>
        <Menu fixed="top" size="large">
          <Links />
        </Menu>
        <div style={style.MainDiv}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageTemplate;
