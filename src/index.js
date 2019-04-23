import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageBatch from './reducers/manageBatch'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header/Header'
import * as serviceWorker from './serviceWorker';

const store = createStore(manageBatch)

ReactDOM.render(
  <Router>
    <Header />
    <Provider store={store}>
      <Route exact path="/batches" component={App} />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
