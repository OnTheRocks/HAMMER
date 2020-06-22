import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HammerNavbar from './components/HammerNavbar';
import Drivers from './components/Drivers';

function App() {
  return (
    <div className="App">
     <HammerNavbar />
     <Drivers />
    </div>
  );
}

export default App;
