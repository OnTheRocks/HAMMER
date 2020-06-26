import React, { Component } from 'react';
import HammerNavbar from './components/HammerNavbar';
// import Drivers from './components/Drivers';
import Customers from './components/CustomerList';
// import DriverModal from './components/DriverModal';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render()  {
    return (
      <Provider store={store}> 
        <div className="App">
         <HammerNavbar />
         {/* <DriverModal /> */}
         {/* <Drivers /> */}
         <Customers />
        </div>
      </Provider>
    );
  }
}

export default App;
