import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Materials from './components/pages/Materials';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Aoo()  {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact pathe={"/materials"}>
            <Materials />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default APP;