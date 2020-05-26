import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../assets/styles/theme';
import LandingPage from '../views/LandingPage/LandingPage';
import NavBar from '../views/NavBar/NavBar';
import Login from '../components/forms/UserLogin';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
