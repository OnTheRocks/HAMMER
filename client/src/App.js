import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Tickets from './components/pages/Tickets';
import TicketDetails from './components/pages/TicketDetails';
import Customers from './components/pages/Customers';
import CustomerDetails from './components/pages/CustomerDetails';
import Materials from './components/pages/Materials';
import MatDetails from './components/pages/MatDetails';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/App.css';

function App()  {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path={"/tickets"}>
            <Tickets />
          </Route>
          <Route exact path={"/tickets/:id"}>
            <TicketDetails />
          </Route>
          <Route exact path={"/customers"}>
            <Customers />
          </Route>
          <Route exact path={"/customers/:id"}>
            <CustomerDetails />
          </Route>          
          <Route exact path={"/materials"}>
            <Materials />
          </Route>
          <Route exact path={"/materials/:id"}>
            <MatDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;