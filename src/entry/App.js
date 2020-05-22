import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './app.css';
import HelloComponent from '../components/HelloComponent';
import FrontPage from '../views/frontPage';
import SignupComponent from '../components/forms/signupForm';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={HelloComponent} exact />
      <Route path="/login" component={FrontPage} />
      <Route exact path="/signup" component={SignupComponent} />
    </Switch>
  </Router>
);

export default App;
