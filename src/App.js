import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' component={Feed} exact/>
        <Route path='/profile' component={Profile} exact/>
    </div>
    </Router>
  );
}

export default App;
