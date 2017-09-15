import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {FETCH_USERS_REQUESTED, ADD_ADMIN_ROLE, REMOVE_ADMIN_ROLE} from './constants.js';
import {selectUsers} from './selectors.js';
import {List} from 'semantic-ui-react'
import UserItem from './UserItem';

class UsersContainer extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <h2>Users</h2>
        <List>
          {this.props.users.map((user) => (
            <UserItem
              key={user.user.id}
              user={user}
              addAdminRole={this.props.addAdminRole}
              removeAdminRole={this.props.removeAdminRole}
            />
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = () => createStructuredSelector({
  users: selectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch({type: FETCH_USERS_REQUESTED}),
    addAdminRole: (email) => dispatch({type: ADD_ADMIN_ROLE, email}),
    removeAdminRole: (email) => dispatch({type: REMOVE_ADMIN_ROLE, email}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
