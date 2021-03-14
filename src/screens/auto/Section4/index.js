import { useTranslation } from 'react-i18next';
import Car1 from '../../../assets/images/Car1.svg'
import Car2 from '../../../assets/images/Car2.png'
import Car3 from '../../../assets/images/Car3.svg'
import Scrollicon from "../../../assets/images/Scrollicon.svg";


import './style.css';
export default function Section4() {

    const { t } = useTranslation();


    return (
        <div>
            <div className='container pb-5'>

                <p className='scroll-title'>{t('Data-auto.Section4.header.1')}</p>
                <div className='scroll scroll-height scroll-red scroll-gray scroll-gray position-relative '>
                    <div class="d-flex position-absolute">

                        <div className='main-box'>
                            <div className='position-relative car-box-img '>
                                <img src={Car1} alt="Logo" />
                            </div>

                            <div className='box box-gray  p-3  ml-0 position-absolute car-box-gray '>
                                <div className='d-flex flex-column gray-div'>
                                    <div className=' d-flex align-self-start scroll-logo'>
                                        <img src={Scrollicon} alt="Logo" />
                                    </div>

                                    <div>
                                        <p className='scroll-box-title  text-white '>{t('Data-auto.Section4.1.1')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.1.2')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.1.3')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.1.4')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.1.5')}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* meore boxsi */}
                        <div className='main-box position-relative'>
                            <div className=' car-box-img '>
                                <img src={Car2} alt="Logo" />
                            </div>
                            <div className='box box-gray  p-3 position-absolute car-box2'>
                                <div className='d-flex flex-column gray-div'>
                                    <div className=' d-flex align-self-start scroll-logo'>
                                        <img src={Scrollicon} alt="Logo" />
                                    </div>

                                    <div>
                                        <p className='scroll-box-title  text-white '>{t('Data-auto.Section4.2.1')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.2')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.3')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.4')}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* mesame boxsi */}

                        <div className='main-box position-relative'>
                            <div className=' car-box-img '>
                                <img src={Car2} alt="Logo" />
                            </div>
                            <div className='box box-gray  p-3 position-absolute car-box2'>
                                <div className='d-flex flex-column gray-div'>
                                    <div className=' d-flex align-self-start scroll-logo'>
                                        <img src={Scrollicon} alt="Logo" />
                                    </div>

                                    <div>
                                        <p className='scroll-box-title  text-white '>{t('Data-auto.Section4.2.1')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.2')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.3')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.4')}</p>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className='main-box position-relative'>
                            <div className=' car-box-img '>
                                <img src={Car2} alt="Logo" />
                            </div>
                            <div className='box box-gray  p-3 position-absolute car-box2'>
                                <div className='d-flex flex-column gray-div'>
                                    <div className=' d-flex align-self-start scroll-logo'>
                                        <img src={Scrollicon} alt="Logo" />
                                    </div>

                                    <div>
                                        <p className='scroll-box-title  text-white '>{t('Data-auto.Section4.2.1')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.2')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.3')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.2.4')}</p>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className='main-box position-relative'>
                            <div className=' car-box-img '>
                                <img src={Car3} alt="Logo" />
                            </div>
                            <div className='box box-gray  p-3 position-absolute car-box2'>
                                <div className='d-flex flex-column gray-div'>
                                    <div className=' d-flex align-self-start scroll-logo'>
                                        <img src={Scrollicon} alt="Logo" />
                                    </div>

                                    <div>
                                        <p className='scroll-box-title  text-white '>{t('Data-auto.Section4.1')}</p>
                                        <p className='text-white text-size'>{t('Data-auto.Section4.1')}
                                </p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}