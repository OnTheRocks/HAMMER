import React, { useState } from "react";


function Main() {
  
return (

  <div>
    <h1>Welcome to my App!</h1>
    <form action="/logout?_method=DELETE" method="POST">
      <button type="submit">Log Out</button>
    </form>
  </div>

  );
}

export default Main;