import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import NavContact from "./NavContact";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <NavContact/>
        <Switch>
          <Route path= "/Home" exact component= {Home} />
          <Route path= "/" isActive={(match, location) => {
            if(location.pathname === '/' || match) {
              return true 
            }
            return false
          }} exact component= {Home} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
