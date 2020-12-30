import React, { useState } from "react";


function Main() {
  const [users] = useState({})
  
  console.log(users.name);
return (

  <div>
    <h1>Hello &nbsp; {users.name}</h1>
    <form action="/logout?_method=DELETE" method="POST">
      <button type="submit">Log Out</button>
    </form>
  </div>

  );
}

export default Main;