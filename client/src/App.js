import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Index from './components/pages/Index'
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Tickets from './components/pages/Tickets';
import TicketDetails from './components/pages/TicketDetails';
import Customers from './components/pages/Customers';
import NewCustomers from './components/pages/NewCustomers';
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
          <Route exact path={"/"}>
            <Index />
          </Route>
          <Route exact path={"/register"}>
            <Register />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/tickets"}>
            <Tickets />
          </Route>
          <Route exact path={"/tickets/:id"}>
            <TicketDetails />
          </Route>
          <Route exact path={"/customers"}>
            <Customers />
          </Route>
          <Route exact path={"/Newcustomers"}>
            <NewCustomers />
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