import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Cart from './cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
