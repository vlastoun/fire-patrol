import * as React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const style = {
  table: {marginTop: '42.84px'},
  cellTop: {verticalAlign: 'top'},
};

const SidebarNavigation = (props) => {
  const visible = props.width > 750;
  return (
    <table style={style.table}>
      <tbody>
        <tr>
          <td>
            {React.Children.toArray(props.children)}
          </td>
          <td style={style.cellTop}>
            <Sidebar visible={visible}/>
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
