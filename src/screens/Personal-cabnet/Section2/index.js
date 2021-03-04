


import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Pay from '../Pay';

import './style.css';


export default function Section2() {
    return (
        <div className='fluid-container background-red'>

            <div className='container text-center'>
                <NavLink className='text-center text-danger cabnet-title mb-3' to="/Home">
                    აქტიური პოლისები
                </NavLink>
                <div className='d-flex row'>
                    <div className='col-4'> <Pay expanded={true} background="box1" /></div>

                    <div className='col-4'> <Pay background="box2" /></div>

                    <div className='col-4'> <Pay background="box3" /></div>
                </div>










            </div>
        </div>


    )
};