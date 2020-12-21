import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../Grid";
// import Jumbotron from "../Jumbotron";
// import API from "../../utils/API";



function Register(props) {


return (
    <container fluid>
    <h1>Register</h1> 
    <form action="/Register" method="post" >
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required/>    
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required/>    
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>    
      </div>
      <button type="submit">Register</button> 
    </form>
    <a href="/login">Login</a>
    </container>
    );
}

export default Register