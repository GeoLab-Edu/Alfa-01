
import Redicon11 from "../../../assets/images/Redicon11.svg";
import Redicon22 from "../../../assets/images/Redicon22.svg";
import Redicon33 from "../../../assets/images/Redicon33.svg";

import './style.css';

export default function Section3() {
    return (
      
            
            <div className='d-flex container text-center justify-content-center tree-boxs'>
                <div className='p-3'>
                    <img src={Redicon11} alt="Logo" />
                    <p >ჩემი გადასახადები</p>
                </div>
                <div className='p-3'>
                    <img src={Redicon22} alt="Logo" />
                    <p>ჩემი გადასახადები</p>
                </div>
                <div className='p-3'>
                    <img src={Redicon33} alt="Logo" />
                    <p>ჩემი გადასახადები</p>
                </div>
            </div>
        

    )
}