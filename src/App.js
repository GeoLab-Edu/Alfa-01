import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";


// Screens

import './App.css';
import Home from "./screens/home/Home";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Contact/>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={Home} />
        </Switch>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
