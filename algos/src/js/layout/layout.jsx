import React from 'react';
import {
  Route,
  Routes as Switch,
  Navigate,
  HashRouter as Router  } from 'react-router-dom';
import Login from '../containers/login-container/login';

const Layout = (props) => {
  const { id } = props;
  return (
    <div>
      <div>
        {id}
        Home
      </div>
      <Router>
        <Switch>
          <Route path="/" element={<Navigate to ="/login" />}/>
          <Route path="/path" exact={true} component={Login} /> 
        </Switch>
      </Router>
    </div>
  )
};

export default Layout;