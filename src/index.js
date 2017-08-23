import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import store from './store';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/portfolio/">
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
