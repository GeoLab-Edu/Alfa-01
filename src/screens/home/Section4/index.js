import { Carousel } from "react-bootstrap";
import Agrophoto from '../../../assets/images/Agrophoto.svg';
import Truckphoto from '../../../assets/images/Truckphoto.svg';
import Agroicon from '../../../assets/images/Agroicon.svg';
import Truckicon from '../../../assets/images/Truckicon.svg';
import './style.css';
import { useTranslation } from "react-i18next";
export default function Section4() {
    
    const { t } = useTranslation();

    return (
        <div className='section6 container slider'>
            <h1 className='text-center mt-5 '>{t('Data.SectionFour.1.title.1')}</h1>
            <p className='text-center text-black mb-4'>
                {t('Data.SectionFour.1.text.1')}
            </p>

            <Carousel className='carusel mb-5'>
                <Carousel.Item>
                    <div className='d-flex justify-content-center'>
                        <div className='position-relative'>
                            <img src={Agrophoto} alt="img" />
                            <p className='text-center m-2'>{t('Data.SectionFour.2.1.1')}</p>
                            <div className='position-absolute agro-icon'>
                                <img src={Agroicon} alt="img" />
                            </div>
                        </div>


                        <div className='position-relative'>
                            <img src={Truckphoto} alt="img" />
                            <p className='text-center m-2'>{t('Data.SectionFour.2.2.1')}</p>
                            <div className='position-absolute truckicon'>
                                <img src={Truckicon} alt="img" />
                                
                            </div>
                        </div>

                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className='d-flex justify-content-center'>
                        <div className='position-relative'>
                            <img src={Agrophoto} alt="img" />
                            <p className='text-center m-2'>{t('Data.SectionFour.2.1.1')}</p>
                            <div className='position-absolute agro-icon'>
                                <img src={Agroicon} alt="img" />
                            </div>
                        </div>

                        <div className='position-relative'>
                            <img src={Truckphoto} alt="img" />
                            <p className='text-center m-2'>{t('Data.SectionFour.2.2.1')}</p>
                            <div className='position-absolute truckicon'>
                                <img src={Truckicon} alt="img" />
                            </div>
                        </div>

                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className='d-flex justify-content-center'>
                        <div className='position-relative'>
                            <img src={Agrophoto} alt="img" />
                            <p className='text-center m-2'>{t('Data.SectionFour.2.1.1')}</p>
                            <div className='position-absolute agro-icon'>
                                <img src={Agroicon} alt="img" />
                            </div>
                        </div>

                        <div className='position-relative'>
                            <img src={Truckphoto} alt="img" />
                            <p className='text-center m-2'>{t('Data.SectionFour.2.2.1')}</p>
                            <div className='position-absolute truckicon'>
                                <img src={Truckicon} alt="img" />
                            </div>
                        </div>

                    </div>

                </Carousel.Item>

            </Carousel>

        </div>
    )
}