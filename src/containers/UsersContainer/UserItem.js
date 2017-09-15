import {Radio, Segment, List} from 'semantic-ui-react';
import * as React from 'react';
import PropTypes from 'prop-types';

const style = {
  radio: {float: 'right'},
  span: {marginLeft: '1em', marginRight: '1em', float: 'right'},
}

class UserItem extends React.Component {
  constructor() {
    super();
    this.state = {isAdmin: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.resolveAdmin = this.resolveAdmin.bind(this);
  }
  componentWillMount() {
    this.resolveAdmin(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.resolveAdmin(nextProps);
    }
  }
  handleToggle() {
    if (this.state.isAdmin) {
      this.props.removeAdminRole(this.props.user.user.email);
    } else {
      this.props.addAdminRole(this.props.user.user.email);
    }
  }
  resolveAdmin(props) {
    const {roles} = props.user;
    if (roles.length<1){
      this.setState({isAdmin: false});
      return;
    }
    roles.forEach((role) => {
      if (role.name === 'admin') {
        this.setState({isAdmin: true});
        return;
      }
      this.setState({isAdmin: false});
    });
  }
  render() {
    console.log(this.props.user.user.email)
    return (
      <Segment>
        <List.Item>
          {this.props.user.user.email}
          <Radio
            style={style.radio}
            toggle
            checked={this.state.isAdmin}
            onClick={this.handleToggle}
          />
          {this.props.user.roles.map((role) => <span key={role.id} style={style.span}>{role.name}</span>)}
        </List.Item>
      </Segment>
    );
  }
}

UserItem.propTypes = {
};
export default UserItem;
