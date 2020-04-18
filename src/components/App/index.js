import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from '../Home';
import AdminPage from '../Admin';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AccountPage from '../Account';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import { withFirebase } from '../Firebase';
import PasswordForgetPage from '../PasswordForget';

import * as ROUTES from '../../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      }
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
