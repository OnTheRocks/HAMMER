import React, { Component } from 'react';
import HammerNavbar from './components/HammerNavbar';
import Drivers from './components/Drivers';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <HammerNavbar />
     <Drivers />
    </div>
    </Provider> 
  );
}

export default App;
