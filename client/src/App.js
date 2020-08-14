import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Customers from './components/Customers';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/customers"]}>
            <Customers />
          </Route>
          <Route exact path="/books/:id">
            {/* <Detail /> */}
          </Route>
          <Route>
            {/* <NoMatch /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
