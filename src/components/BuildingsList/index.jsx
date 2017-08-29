import * as React from 'react';
import PageTemplate from '../PageTemplate';
import NavigationContent from '../../containers/NavigationContent';

const BuildingsList = () => (
  <PageTemplate>
    <div style={{ maxWidth: '650px', float: 'none', margin: 'auto' }}>
      <NavigationContent />
    </div>
  </PageTemplate>
);

export default BuildingsList;
