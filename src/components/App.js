import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import Login from './login/Login';
import {Root} from './root/Root';
import Error from './error/Error';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {getAllItems, getMeal} from '../api/shabbat';
//import {random} from './api/jservice';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <Router>
            <div>
              <NavBar />
              <Switch>
                <Route path="/" component={Root} exact />
                <Route path="/Login" component={Login} />
                <Route path="/NavBar" component={NavBar} />
                <Route component={Error} />
              </Switch>
            </div>
          </Router>

      </MuiThemeProvider>
    );
  }
}

export default App;
