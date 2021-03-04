import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";


// Screens

import './App.css';
import Home from "./screens/home/Home";
import Auto from "./screens/auto/Auto";
import PersonalCabnet from "./screens/Personal-cabnet/PersonalCabnet";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Contact/>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Auto" exact component={Auto} />
          <Route path="/personal-cabnet" exact component={PersonalCabnet} />
          <Route path="/" isActive={(match, location) => {
            if (location.pathname === '/' || match) {
              return true
            }
            return false
          }} exact component={Home} />
        </Switch>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
