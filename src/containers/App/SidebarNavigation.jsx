import * as React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const SidebarNavigation = (props) => {
  const visible = props.width > 750;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Sidebar visible={visible}/>
          </td>
          <td>
            {React.Children.toArray(props.children)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

SidebarNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
};
export default SidebarNavigation;
