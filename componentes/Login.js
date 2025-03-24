import React, { useState } from 'react';
import './Login.css'

function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password});
  };

  return (
    <div className='form-container'>
      <h2 className='header'>Login Form</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label className='label'>E-mail :</label>
          <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className='label'>Password :</label>
          <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className='button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
