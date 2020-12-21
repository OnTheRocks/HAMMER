import React, { useEffect, useState } from "react";
import Container from "reactstrap/lib/Container";


function Index(props) {

  return (
    <Container fluid>
      <a href="/login">Login</a>
      <br></br>
      <a href="/register">register</a>
    </Container>

  );
}

export default Index