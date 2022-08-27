import React, { useState } from 'react';
import Input from '../../components/input-field';
import ToggleButton from '../../components/toggle-button/toggleButton';
import Button from '../../components/button/Button';
import './styles.css';

const Login = (props) => {
  const { type = 'normal' } = props;

  const [selected, setSelected] = useState('signUp')
  const loginButtons = [
    {
      id: 'signUp',
      name: 'Sign Up'
    },
    {
      id: 'signIn',
      name: 'Sign In'
    }
  ]
  return (
    <div>
      <div className='loginTypes'>
        <div>
          <ToggleButton
            list={loginButtons}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div class="inputContainer">
        <div class="title">Full Name</div>     
        <Input
          placeholder="Enter your name"
          type="name"
        />
        </div>
        <div class="inputContainer">
        <div class="title">Phone Number</div>     
        <Input
          placeholder="Enter your number"
          type="number"
        />
        </div>
        <div class="inputContainer">
        <div class="title">Password</div>     
        <Input
          placeholder="Enter your password"
          type="password"
        />
        </div>
        <div class="buttonContainer">
          <Button
            type="fill"
            label={(selected === 'signUp' && "Create Account") || 'Log In'}
            width="100%"
          />
        </div>
      </div>
    </div>
  )
};

export default Login;