import Apple from '../../../assets/images/Apple.svg';
import Android from '../../../assets/images/Android.svg';


import './style.css';
import { useTranslation } from 'react-i18next';

export default function SectionSix() {

    const { t } = useTranslation();

    return (
        <div className='fluid-container background-img  position-relative mt-5'>
            <div className='clip-div position-relative'>

            </div>
            <div className='row two-box position-absolute w-100'>
                <div className='container d-flex myapp'>
                    <div className='col-6'>

                        <div className='position-absolute text-box center h-100 w-100'>
                            <h2 className='text-white w-120 mb-2'>გადმოწერე ჩვენი აპლიკაცია</h2>
                            <div className='border-red mb-2'></div>
                            <p className='text-white text-font'>და ისარგებლე
                             ჩვენი სერვისებით უფრო მოხერხებულად </p>
                        </div>
                    </div>
                    <div className='col-6 mr-0 pr-0'>
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