
import { slide as Menu } from 'react-burger-menu'
import React from "react";
import './style.css';
import { Form, FormControl, NavLink } from 'react-bootstrap';
import  Headerlogo from '../../assets/images/Headerlogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Section2 from './Section2';
import Section3 from './Section3';
import Section1 from './Section1';

class BurgerMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

  render () {
    return (

        <Menu id="BurgerMenu" left width={ '100%' }  disableAutoFocus>
            <div className="outline d-flex h-auto justify-content-start align-items-center flex-column w-100">
                <div className="d-flex h-auto justify-content-center align-items-lg-start mt-2 w-100">
                    <Form inline className="position-relative">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 form-control-search" />
                        <FontAwesomeIcon className="fa-search position-absolute justify-content-lg-end" icon={faSearch}/>
                    </Form>
                </div>
                <div className="w-100">
                    <Section1 expanded={false}/>
                </div>
                <div className="w-100">
                    <Section2 expanded={true}/>
                </div>
                <div className="w-100">
                    <Section3/>
                </div>
            </div>
        </Menu>
    );
  }
}
export default BurgerMenu