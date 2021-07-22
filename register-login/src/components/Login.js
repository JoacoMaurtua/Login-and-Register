import React, {useState} from 'react'

export default function Login() {
  const [state,setState] = useState({
    email:'',
    password:'',
  });

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    });
  }

  const {email,password} = state

  return (
    <form className = "LogForm" onSubmit={event=>event.preventDefault()}>

      <h2>Login</h2>
      <label>Username: </label>
      <input type="email" name="email" value={email} onChange={handleChange}/>
      
      <label>Password: </label>
      <input type="password" name="password" value={password} onChange={handleChange}/>
      
      <button type="submit">Login</button>
      
    </form>
  )
}
