import { useTranslation } from "react-i18next";
import Scrollicon from "../../assets/images/Scrollicon.svg";

import './style.css';

export default function GreyBox() {

    const { t } = useTranslation();

    return (
        <div className='container pt-1'>

            <p className='scroll-title'>{t('Data.SectionFive.1.title.1')}</p>

            <div className='scroll scroll-gray scroll-gray position-relative mb-4'>
                <div className="d-flex position-absolute">

                    <div className='box box-gray  p-3  ml-0'>
                        <div className='d-flex flex-column gray-div'>
                            <div className=' d-flex align-self-start scroll-logo '>
                                <img src={Scrollicon} alt="Logo" />
                            </div>

                            <div>
                                <p className='scroll-box-title  text-white '>{t('Data.SectionFive.1.text.1')}</p>
                                <p className='text-white text-size'>
                                    {t('Data.SectionFive.1.text.2')}
                                    {t('Data.SectionFive.1.text.3')}
                                    {t('Data.SectionFive.1.text.4')}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='box box-gray  p-3  '>
                        <div className='d-flex flex-column gray-div'>
                            <div className=' d-flex align-self-start scroll-logo'>
                                <img src={Scrollicon} alt="Logo" />
                            </div>

                            <div>
                                <p className='scroll-box-title  text-white '>{t('Data.SectionFive.1.text.1')}</p>
                                <p className='text-white text-size'>
                                    {t('Data.SectionFive.2.text.2')}
                                    {t('Data.SectionFive.2.text.3')}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='box box-gray  p-3  '>
                        <div className='d-flex flex-column gray-div'>
                            <div className=' d-flex align-self-start scroll-logo'>
                                <img src={Scrollicon} alt="Logo" />
                            </div>

                            <div>
                                <p className='scroll-box-title  text-white '>{t('Data.SectionFive.3.text.1')}</p>
                                <p className='text-white margin-bottom text-size'>
                                    {t('Data.SectionFive.3.text.2')}
                                </p>
                                <p className='text-white margin-bottom text-size'>
                                    {t('Data.SectionFive.3.text.3')}
                                </p>
                                <p className='text-white margin-bottom text-size'>
                                    {t('Data.SectionFive.3.text.4')}
                                </p>
                                <p className='text-white margin-bottom text-size'>
                                    {t('Data.SectionFive.3.text.5')}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='box box-gray  p-3  '>
                        <div className='d-flex flex-column gray-div'>
                            <div className=' d-flex align-self-start scroll-logo'>
                                <img src={Scrollicon} alt="Logo" />
                            </div>

                            <div>
                                <p className='scroll-box-title  text-white '>დისტანციური კონსულტაცია</p>
                                <p className='text-white text-size'>სასიამოვნო სიახლე ალფასგან უკვე
                                შესაძლებელია სატელეფონო ან ვიდეო
                                კონსულტაციი...
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='box box-gray  p-3  '>
                        <div className='d-flex flex-column gray-div'>
                            <div className=' d-flex align-self-start scroll-logo'>
                                <img src={Scrollicon} alt="Logo" />
                            </div>

                            <div>
                                <p className='scroll-box-title  text-white '>დისტანციური კონსულტაცია</p>
                                <p className='text-white text-size'>სასიამოვნო სიახლე ალფასგან უკვე
                                შესაძლებელია სატელეფონო ან ვიდეო
                                კონსულტაციი...
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='box box-gray  p-3  '>
                        <div className='d-flex flex-column gray-div'>
                            <div className=' d-flex align-self-start scroll-logo'>
                                <img src={Scrollicon} alt="Logo" />
                            </div>

                            <div>
                                <p className='scroll-box-title  text-white '>დისტანციური კონსულტაცია</p>
                                <p className='text-white text-size'>სასიამოვნო სიახლე ალფასგან უკვე
                                შესაძლებელია სატელეფონო ან ვიდეო
                                კონსულტაციი...
                                </p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}