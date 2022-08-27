import React from 'react';

const Login = (props) => {
  const { type = 'normal' } = props;
  return (
    <div>{type}</div>
  )
};

export default Login;