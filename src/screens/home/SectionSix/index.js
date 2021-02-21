import Pexels from '../../../assets/images/Pexels.svg';
import Apple from '../../../assets/images/Apple.svg';
import Android from '../../../assets/images/Android.svg';


import './style.css';

export default function SectionSix() {
    return (
        <div className='fluid-container background-img  position-relative'>
            <div className='clip-div position-relative   '>

            </div>
            <div className='row two-box position-absolute w-100'>
                <div className='container d-flex'> 
                    <div className='col-6'>

                        <div className='position-absolute text-box center h-100 w-100'>
                            <h2 className='text-white mb-2'>გადმოწერე ჩვენი აპლიკაცია </h2>
                            <div className='border-red mb-2'></div>
                            <p className='text-white'>და ისარგებლე ჩვენი სერვისებით უფრო მოხერხებულად</p>
                        </div>
                    </div>
                    <div className='col-6 p-0 '>
                        <div className='App-store justify-content-end d-flex'>
                            <img src={Apple} alt="Logo" />
                        </div>
                        <div className='App-store mt-3 justify-content-end d-flex'>
                            <img src={Android} alt="Logo" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}