import React, { useEffect, useState } from "react";


function Login(props) {

return (

<container fluid>
<h1>Login</h1> 
{/* <% if (messages.error) { %>
  <%= messages.error %>
<% } %>  */}
<form action="/login" method="post" >
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
</container>

);
}

export default Login