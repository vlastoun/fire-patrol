import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import store from './store';
import App from './containers/App';
import ScrollToTop from './ScrollToTop';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/fire-patrol-demo">
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
