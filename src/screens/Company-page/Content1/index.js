import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import ConnectIcon from "../../../assets/images/Connect-icon.svg";
import ContactIcon1 from "../../../assets/images/ContactIcon1.svg";
import ContactIcon2 from "../../../assets/images/ContactIcon2.svg";
import ContactIcon3 from "../../../assets/images/ContactIcon3.svg";




import './style.css';
export default function Content1() {
    return (
        <div className='fluid-container'>
            <div className='container'>
                <div className='row mb-4'>
                    <div className='col-4 pl-0'>
                        <div className="contact-box w-100 d-flex align-items-center p-2 ">
                            <img src={ContactIcon1} alt="Logo" />
                            <p className='m-0 text-white'>(032) 1 640 640</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className=" contact-box w-100 d-flex align-items-center p-2">
                            <img src={ContactIcon2} alt="Logo" />
                            <p className='m-0 text-white'>ონლაინ კონსულტაცია</p>
                        </div>
                    </div>
                    <div className='col-4 pr-0'>
                        <div className=" contact-box w-100 d-flex align-items-center p-2">
                            <img src={ContactIcon3} alt="Logo" />
                            <p className='m-0 text-white'>insurance @alpha.ge</p>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-6'>
                        <p>ფილიალები: </p>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <div>
                            <p className='text-right m-0'>მოგვძებნეთ რუკაზე</p>
                            <div className='search d-flex mt-1 align-items-center justify-content-end p-2'>
                                <p className='m-0 mr-2'>ქალაქი</p>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                            <div className='search d-flex align-items-center justify-content-end p-2 mb-0'>
                                <p className='m-0 mr-2 '>ქუჩა</p>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>



    )
}





