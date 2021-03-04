

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Personalimg from '../../../assets/images/Personalimg.svg';
import './style.css';

export default function Section1() {
    return (
        <div className="fluid-container">
            <div className='cabnet-background position-relative'>

            </div>
            <div className='clip-div-cabnet position-absolute'>

            </div>
            <div className='container'>

                <NavLink className='position-absolute main-link text-white' to="/Home">
                    მთავარი > ჩემი კაბინეტი
                </NavLink>
            </div>




            <div className='container '>
                <div className='row align-items-center cabnet-section-row'>
                    <div className='d-flex align-items-center col-9 '>
                        <img src={Personalimg} alt="Logo" />
                        <div className=' ml-3 mt-5 '>
                            <p className='m-0 display-name'>სახელი გვარი</p>
                            <NavLink className='text-dark display-text ' to="/home">შეცვლა</NavLink>
                        </div>
                    </div>

                    <div className='col-3  mt-5'>
                        <div className='justify-content-end d-flex'> <NavLink className='text-dark display-text' to="/home">
                            გამოსვლა
                        </NavLink>
                        </div>
                        <div className='justify-content-end d-flex'> <NavLink className='text-dark display-text' to="/home">
                            ბიზნეს ექაუნთის დამატება +
                        </NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};