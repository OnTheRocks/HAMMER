import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Materials from './components/pages/Materials';
import MatDetails from './components/pages/MatDetails';
import Tickets from './components/pages/Tickets';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/App.css';

function App()  {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path={"/materials"}>
            <Materials />
          </Route>
          <Route exact path={"/materials/:id"}>
            <MatDetails />
          </Route>
          <Route exact path={"/tickets"}>
            <Tickets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;