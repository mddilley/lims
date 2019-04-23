import React from 'react';
import './App.css';
import Header from './header/Header'
import BatchesContainer from './containers/BatchesContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <BatchesContainer />
    </div>
  );
}

export default App;
