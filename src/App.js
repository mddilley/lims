import React from 'react';
import './App.css';
import BatchesContainer from './containers/BatchesContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './static/Header'
import Welcome from './static/Welcome'
import About from './static/About'

function App() {
  return (
    <div className="App">
    <Header />
      <Router>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/batches" component={BatchesContainer} />
      </Router>
    </div>
  );
}

export default App;
