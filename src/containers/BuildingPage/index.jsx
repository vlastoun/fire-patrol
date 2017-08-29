import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as R from 'ramda';
import { Image, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTemplate from '../../components/PageTemplate';
import { selectObjects } from './selectors';
import MarkdownParser from '../../components/MarkdownParser';
import ColourResolver from '../../ColourResolver';

const headings = {
  arrival: 'Popis příjezdu:',
  objectCharacter: 'Charakter objektu:',
  extinguishings: 'Hasební látky:',
  information: 'Informace pro velitele záasahu',
};


const BuildingPage = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const building = R.find(R.propEq('id', id), props.objects);
  const {
    label, group, name, so, date,
    height, latitude, longitude,
    left, top, arrival, objectCharacter,
    extinguishings, information, img } = building;
  return (
    <PageTemplate>
      <div style={{ maxWidth: '650px', float: 'none', margin: 'auto' }}>
        <Table celled structured style={{ width: '100%' }} color={ColourResolver(group)}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell disabled style={{ maxWidth: '100px' }} rowSpan={2}><span style={{ fontSize: '3em' }}>{label}</span></Table.HeaderCell>
              <Table.HeaderCell colSpan={3} style={{ textAlign: 'left' }}>OBJEKT: <h1>{name}</h1></Table.HeaderCell>
              <Table.HeaderCell>OPERATIVÍ KARTA</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>SO {so}</Table.HeaderCell>
              <Table.HeaderCell colSpan={2}><Link to="/">GPS: {latitude} {longitude}</Link></Table.HeaderCell>
              <Table.HeaderCell>{height}</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell colSpan={4}>ADRESA: BIOCEL Paskov, a.s., Zahradní 762, 739 21 Paskov</Table.HeaderCell>
              <Table.HeaderCell>{date}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Row>
            <Table.Cell colSpan={5}>
              <h2>{headings.arrival.toUpperCase()}</h2>
              <MarkdownParser data={arrival} />
              <h2>{headings.objectCharacter.toUpperCase()}</h2>
              <MarkdownParser data={objectCharacter} />
              <h2>{headings.extinguishings.toUpperCase()}</h2>
              <MarkdownParser data={extinguishings} />
              <h2>{headings.information.toUpperCase()}</h2>
              <MarkdownParser data={information} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell colSpan={5}>
              {img.length > 0
                ? img.map((image) => <Image key={image} src={image} />)
                : null
              }
            </Table.Cell>
          </Table.Row>
        </Table>
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
