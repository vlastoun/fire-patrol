import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class CardItem extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.mainimg} />
        <Card.Content>
          <Card.Header>
            {this.props.title}
          </Card.Header>
          <Card.Description >
            {this.props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/projects/${this.props.id}`}>Více</Link>
        </Card.Content>
      </Card>
    );
  }
}

CardItem.propTypes = {
};
export default CardItem;
