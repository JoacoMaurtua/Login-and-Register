import React, { useState } from 'react';

export default function Register() {

  const [state,setState] = useState({
    userName:'',
    email:'',
    password:'',
    confirm:''
  });

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    });
  }

  const {userName,email,password,confirm} = state

  return (
    <form className = "RegForm" onSubmit={event=>event.preventDefault()}>

      <h2>Register</h2>
      <label>Username: </label>
      <input type="text" name="userName" value={userName} onChange={handleChange}/>
     
      <label>Email: </label>
      <input type="email" name="email" value={email} onChange={handleChange}/>
      
      <label>Password: </label>
      <input type="password" name="password" value={password} onChange={handleChange}/>
      
      <label>Confirm: </label>
      <input type="password" name="confirm" value={confirm} onChange={handleChange}/>
      
      <button type="submit">Register</button>
      
    </form>
  )
}
