import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import MapPage from '../MapPage';
import Links from '../../components/Links';
import HydrantsMap from '../../components/Map-hydrants';
import LaddersMap from '../../components/Map-ladders';
import BuildingPage from '../BuildingPage';
import SidebarNavigation from './SidebarNavigation';
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0};
    this.updateWindowSize = this.updateWindowSize.bind(this);
  }
  componentWillMount(){
    this.updateWindowSize();
  }
  componentDidMount(){
    window.addEventListener('resize', this.updateWindowSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }
  updateWindowSize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <SidebarNavigation width={this.state.width}>
        <Links />
        <Switch>
          <Route exact path="/" component={MapPage} />
          <Route exact path="/building/:id" component={BuildingPage} />
          {/* TODO: nest hydrants and ladders under 
            layer of Points component - must have maps with correct width
            Just move those subroutes under another router in MapPage */}
          <Route exact path="/ladders" component={LaddersMap} />
          <Route exact path="/hydrants" component={HydrantsMap} />
          <Route component={MapPage} />
        </Switch>
      </SidebarNavigation>
    );
  }
}

App.propTypes = {
};
export default App;
