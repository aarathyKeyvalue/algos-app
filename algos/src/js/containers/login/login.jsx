import React from 'react';
import ToggleButton from '../../components/toggle-button/toggleButton';
import './styles.css';

const Login = (props) => {
  const { type = 'normal' } = props;
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
            selectedVal='signUp'
          />
        </div>
      </div>
    </div>
  )
};

export default Login;