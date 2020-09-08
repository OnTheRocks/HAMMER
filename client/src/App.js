import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Customers from './components/Customers';
import Tickets from './components/Tickets';
import CustDetails from './components/CustDetails';
import TicketDetails from './components/TicketDetails';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={"/customers"}>
            <Customers />
          </Route>
          <Route exact path={"/customers/:id"}>
            <CustDetails />
          </Route>
          <Route exact path={"/tickets"}>
            <Tickets />
          </Route>
          <Route exact path={"/tickets/:id"}>
            <TicketDetails />
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
