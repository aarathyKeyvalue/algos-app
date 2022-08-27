import React from "react";
import {
  Route,
  Routes as Switch,
  Navigate,
  HashRouter as Router  } from 'react-router-dom';
import MainContainer from '../containers/login-container/loginContainer';
import VerificationCode from '../containers/verification-code';
import HomePage from '../containers/home-page';
import './styles.css';

const Layout = (props) => {
  const { id } = props;
  return (
    <div class="layoutWrapper">
      <div className='header'>
        <div>9:41</div>
        <div className='iconContainer'>
          <div className='range'/>
          <div className='wifi'/>
          <div className='battery'/>
        </div>
      </div>
      <div className='containerVal'>
        <Router>
          <Switch>
            <Route path="/" exact={true} element={<Navigate to ="/login" />}/>
            <Route path="/login" exact={true} element={<MainContainer />} /> 
            <Route path="/verification" exact={true} element={<VerificationCode />} />
            <Route path="/home" exact={true} element={<HomePage />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Layout;
