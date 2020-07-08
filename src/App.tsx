import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Top from './containers/pages/Top';
import Doc from './containers/pages/Doc';
import RootContext from './context/RootContext';

function App() {
  return (
    <div className="App">
      <Router>
        <RootContext.Provider
          value={{
            backgroundColor: '#000000',
            example: 'hogehoge',
          }}
        >
          <Route exact path="/" component={Top} />
          <Route path="/docs" component={Doc} />
        </RootContext.Provider>
      </Router>
    </div>
  );
}

export default App;
