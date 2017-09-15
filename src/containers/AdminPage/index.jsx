/* eslint-disable */
import * as React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../../components/PageTemplate';
import UsersContainer from '../UsersContainer';

class AdminPage extends React.Component {
  render() {
    return (
      <PageTemplate>
        <h1>Admin page</h1>
        <UsersContainer />
      </PageTemplate>
    );
  }
}

AdminPage.propTypes = {
};
export default AdminPage;
