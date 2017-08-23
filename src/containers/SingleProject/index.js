import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PageTemplate from '../../components/PageTemplate';
import Post from '../../components/Post';
import { FETCH_REQUESTED } from './constants';
import { selectPost, selectLoading } from './selectors';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class SingleProject extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.fetch(id);
  }
  render() {
    const { post, loading } = this.props;
    return (
      <PageTemplate>
        <Post post={post.toJS()} {...loading} />
      </PageTemplate>
    );
  }
}

SingleProject.propTypes = {
  match: PropTypes.object.isRequired,
  fetch: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    fetch: (id) => dispatch({ type: FETCH_REQUESTED, id }),
  };
}
const mapStateToProps = createStructuredSelector({
  post: selectPost(),
  loading: selectLoading(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject);
