import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {FETCH_USERS_REQUESTED} from './constants.js';
import {selectUsers} from './selectors.js';

class UsersContainer extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.props.users.map((user) => (
            <div key={user.user.id}>
              <li>{user.user.email}</li>
            </div>
          ))}
        </ul>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
