


import { NavLink } from 'react-bootstrap';
import './style.css';


export default function Section1() {
    return (
        <div>

            <div className='background-Companipage position-relative fluid-container'>

                <div className='clip position-absolute '>
                </div>
                <div className=' section-auto  position-absolute  row w-100' >
                    <div className='container '>
                        <div className='position-absolute link-add'>
                            <NavLink className='position-absolute  text-white pt-0 pb-0' href="/Home" >მთავარი > ჩემი კაბინეტი</NavLink>
                        </div>
                        <div className='with-div '>
                            <h2 className='text-white mb-2 companipage-title'>12 ფილიალი საქართველოს მასშტაბით</h2>
                            <div className='border-red mb-2'></div>
                            <p className='text-white'>ჩვენს სადაზღვეო ოფისებს შეხვდებით არა მხოლოდ თბილიშსი
                </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
};