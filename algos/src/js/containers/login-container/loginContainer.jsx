import React from "react";
import Login from '../login';
import './styles.css';

const LoginContainer = (props) => {
  const { type } = props;

  return (
    <div class="loginContainer">
      <div className='logoContainer' />
      <div className="tagline">Shipping and Track Anytime </div>
      <div className="subtagline">Get great experience with tracky</div>
      <Login />
    </div>
  )
}

export default LoginContainer;
