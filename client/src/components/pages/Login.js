import React from 'react'
// import ReactDOM from 'react-dom'

function Login() {
  
return (

  <div>
    <h1>Login</h1> 
    <form action="/Login" method="post" >
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required/>    
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required/>    
    </div>
    <button type="submit">Login</button> 
    </form>
    <a href="/Register">Register</a>
  </div>

  );
}

export default Login;