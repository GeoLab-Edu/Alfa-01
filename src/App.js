import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

// Screens

import './App.css';
import Home from "./screens/home/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/" isActive={(match, location) => {
            if (location.pathname === '/' || match) {
              return true
            }
            return false
          }} exact component={Home} />
        </Switch>
        <Contacts />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
