import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../../components/PageTemplate';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class ContactPage extends React.Component {
  render() {
    return (
      <PageTemplate>
        <h2>Kontakt</h2>
        <p>Vlastimil Sadílek</p>
        <p><a href="mailto:vlastimil.sadilek@gmail.com">vlastimil.sadilek@gmail.com</a></p>
        <p>tel: <strong>+420 606 370 640</strong></p>
      </PageTemplate>
    );
  }
}

ContactPage.propTypes = {
};
export default ContactPage;
