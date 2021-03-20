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
import CompanyPage from "./screens/Company-page/CompanyPage";
import CheckoutStep from "./screens/Checkout-step/Checkout-step";
import FormBox from "./components/FormBox";
import FormBox1 from "./components/FormBox1";
import AutoInsurance from "./components/AutoInsurance";
import TooltipIcon from "./components/TooltipIcon";
import AddPeoples from "./components/AddPeoples";
import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";





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
          <Route path="/Company-page" exact component={CompanyPage} />
          <Route path="/TooltipIcon" exact component={TooltipIcon} />
          <Route path="/checkout-step" exact component={CheckoutStep} />
          <Route path="/FormBox1" exact component={FormBox1} />
          <Route path="/AddPeoples" exact component={AddPeoples} />
          <Route path="/MyVerticallyCenteredModal" exact component={MyVerticallyCenteredModal} />
          
          <Route path="/AutoInsurance" exact component={AutoInsurance} />
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
