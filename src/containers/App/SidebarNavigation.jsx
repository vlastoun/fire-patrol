import * as React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-sidebar';

const mql = window.matchMedia(`(min-width: 1400px)`); // eslint-disable-line

class SidebarNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mql,
      docked: props.docked,
      open: props.open,
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  render() {
    return (
      <Sidebar
        sidebar={this.props.sidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        pullRight
      >
        {React.Children.toArray(this.props.children)}
      </Sidebar>
    );
  }
}

SidebarNavigation.propTypes = {
  sidebarContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
export default SidebarNavigation;
