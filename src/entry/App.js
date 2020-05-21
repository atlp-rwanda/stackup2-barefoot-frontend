import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import './app.css';
import HelloComponent from '../components/HelloComponent';
import FrontPage from '../views/frontPage';

const App = () => (
  <div>
    <Router>
      <ul>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Switch>
        <Route path="/" component={HelloComponent} exact />
        <Route path="/login" component={FrontPage} />
      </Switch>
    </Router>
  </div>

);

export default App;
