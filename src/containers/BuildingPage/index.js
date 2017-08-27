import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as R from 'ramda';
import { Image } from 'semantic-ui-react';
import PageTemplate from '../../components/PageTemplate';
import { selectObjects } from './selectors';
import MarkdownParser from '../../components/MarkdownParser';

const headings = {
  arrival: 'Popis příjezdu:',
  objectCharacter: 'Charakter objektu:',
  extinguishings: 'Hasební látky:',
  information: 'Informace pro velitele záasahu',
};


const BuildingPage = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const building = R.find(R.propEq('id', id), props.objects);
  return (
    <PageTemplate>
      <div style={{ maxWidth: '650px' }}>
        <h2>{headings.arrival.toUpperCase()}</h2>
        <MarkdownParser data={building.arrival} />
        <h2>{headings.objectCharacter.toUpperCase()}</h2>
        <MarkdownParser data={building.objectCharacter} />
        <h2>{headings.extinguishings.toUpperCase()}</h2>
        <MarkdownParser data={building.extinguishings} />
        <h2>{headings.information.toUpperCase()}</h2>
        <MarkdownParser data={building.information} />
        {building.img.map((image) => <Image key={image} src={image} />)}
      </div>
    </PageTemplate>
  );
};

BuildingPage.propTypes = {
  match: PropTypes.object.isRequired,
  objects: PropTypes.array.isRequired,
};
const mapStateToProps = createStructuredSelector({
  objects: selectObjects(),
});

export default connect(mapStateToProps, null)(BuildingPage);
