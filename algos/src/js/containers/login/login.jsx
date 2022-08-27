import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input-field';
import SignupButton from '../../components/sign-up-button';
import ToggleButton from '../../components/toggle-button/toggleButton';
import Button from '../../components/button/Button';
import './styles.css';
import Vehicleselection from '../../components/vehicleselection/Vehicleselection';

const Login = (props) => {
  const { type = 'normal' } = props;

  const [selected, setSelected] = useState('signUp')
  const navigate = useNavigate();

  const [values, setValues] = useState({
  name: '',
  number: '',
  password: ''
});
  const [errors, setErrors] = useState({
    name: false,
    number: false,
    password: false
  }); 
  
  const loginButtons = [
    {
      id: 'signUp',
      name: 'Sign Up'
    },
    {
      id: 'signIn',
      name: 'Sign In'
    }
  ];

  const onValueChange = (newValue, type) => {
    setValues({ ...values, [type]: newValue });
  };

  const handleCreateButtonClick = () => {
    let tempErrors= {...errors};
    Object.keys(values).forEach(key => {
      if (!values[key]) tempErrors[key] = true;
      else tempErrors[key] = false;
    });
    setErrors(tempErrors);
    if (!(tempErrors.name || tempErrors.number || tempErrors.password )) navigate(`/verification?number=${values?.number}`); 
  };
  return (
    <div>
      <div className='loginTypes'>
        <div class="toggleButtonContainer">
          <ToggleButton
            list={loginButtons}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div class="inputContainer">
        <div class={`title ${errors.name && 'error'}`}>Full Name</div>     
        <Input
          placeholder="Enter your name"
          type="name"
          onChange={onValueChange}
        />
        </div>
        <div class="inputContainer">
        <div class={`title ${errors.number && 'error'}`}>Phone Number</div>     
        <Input
          placeholder="Enter your number"
          type="number"
          onChange={onValueChange}
        />
        </div>
        <div class="inputContainer">
        <div class={`title ${errors.password && 'error'}`}>Password</div>     
        <Input
          placeholder="Enter your password"
          type="password"
          onChange={onValueChange}
        />
        </div>
        
        <div class="buttonContainer">
          <Button
            type="fill"
            label={(selected === 'signUp' && "Create Account") || 'Log In'}
            width="100%"
            handleClick={() => {
              handleCreateButtonClick()
            }}
          />
          
        </div>
        <div>
      
       </div>
        <div className='text'>OR</div>
     
        <div className='signupbutton'>
        <SignupButton label="Sign Up With Google" className="button"/>
        </div>
      <Vehicleselection/>
      </div>
    </div>
  )
};

export default Login;