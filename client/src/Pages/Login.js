import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({ name: '', email: '', age: '' , mobileNumber: '', passsword: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>Login</div>
  )
}

export default Login