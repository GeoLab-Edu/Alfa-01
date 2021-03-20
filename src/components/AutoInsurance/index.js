


import { NavLink } from 'react-router-dom';

import './style.css';

export default function AutoInsurance() {
    return(
        <div className='position-relative fluid-container'>



        <div className='background-chekoutspet'>
            <div className=' clip-chekount position-absolute '>
            </div>
            <div className=' section1-hight  position-absolute  row w-100' >
                <div className='container'>
                 
                        <NavLink className='position-absolute  text-white link-a-auto navlink-a pl-3' to="/Home">
                            მთავარი > ჩემთვის > ავტოდაზღვევა > შეძენა
                        </NavLink >
                    

                    <div className='with-div  '>
                        <div className='with-div-text ckekout-h2 '>
                            <p className='text-white mb-2 step-title-p'>ავტომობილის დაზღვევის შეძენა</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
    )
}