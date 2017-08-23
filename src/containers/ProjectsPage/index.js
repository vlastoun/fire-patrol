import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PageTemplate from '../../components/PageTemplate';
import CardItem from '../../components/CardItem';
import { FETCH_REQUESTED } from './constants';
import { selectCategories, selectPosts } from './selectors';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.mapProjects = this.mapProjects.bind(this);
  }
  componentWillMount() {
    this.props.fetch();
  }
  mapProjects() {
    const posts = this.props.posts.toJS();
    return posts.map((post) => <div key={post.id} style={{ paddingBottom: '2em' }}><CardItem {...post} /></div>);
  }
  render() {
    const list = this.mapProjects();
    return (
      <PageTemplate>
        <div className="ui grid">
          {list}
        </div>
      </PageTemplate>
    );
  }
}

ProjectsPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch({ type: FETCH_REQUESTED }),
  };
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategories(),
  posts: selectPosts(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);

