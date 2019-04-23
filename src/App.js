import React from 'react';
import './App.css';
import BatchesContainer from './containers/BatchesContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header/Header'
import Welcome from './welcome/Welcome'

function App() {
  return (
    <div className="App">
    <Header />
      <Router>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/batches" component={BatchesContainer} />
      </Router>
    </div>
  );
}

export default App;
