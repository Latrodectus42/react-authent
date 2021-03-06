import React from 'react';
import SignOutButton from '../SignOut';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      { authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li><Link to={ROUTES.HOME}>Home</Link></li>
    <li><Link to={ROUTES.LANDING}>Landing</Link></li>
    <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
    <li><Link to={ROUTES.ADMIN}>Admin</Link></li>
    <li><SignOutButton/></li>
  </ul>
);

const NavigationNonAuth = () => (
  <div>
    <ul>
      <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
      <li><Link to={ROUTES.LANDING}>Landing</Link></li>
    </ul>
  </div>
);
  
export default Navigation;