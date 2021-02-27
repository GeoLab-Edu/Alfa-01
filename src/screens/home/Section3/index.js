import { useTranslation } from "react-i18next";
import Scrollicon from "../../../assets/images/Scrollicon.svg";
import './style.css';

export default function Section3() {

    const { t } = useTranslation();

    return (
        <div className='container '>

            <p className='scroll-title'>{t('Data.SectionThree.1.title.1')}</p>

            <div className='scroll position-relative pb-4 scroll-red'>
                <div className="d-flex position-absolute">
                    <div className='box  p-3 ml-0'>
                        <div className='d-flex  justify-content-between text-white '>
                            <img src={Scrollicon} alt="Logo" />
                            <p className='scroll-box-title  text-right m-0'>
                                {t('Data.SectionThree.1.text.1')}
                            </p>
                        </div>

                        <p className='text-white text-right scroll-box-title'>
                            {t('Data.SectionThree.1.text.2')}
                        </p>
                        <p className='text-white text-right scroll-box-text pt-5'>
                            {t('Data.SectionThree.1.text.3')}
                        </p>
                        <p className='text-white text-right scroll-box-text'>
                            {t('Data.SectionThree.1.text.4')}
                        </p>
                    </div>
                    <div className='box  p-3 '>
                    <div className='d-flex  justify-content-between text-white '>
                            <img src={Scrollicon} alt="Logo" />
                            <p className='scroll-box-title  text-right m-0'>
                                {t('Data.SectionThree.2.text.1')}
                            </p>
                        </div>

                        <p className='text-white text-right scroll-box-title'>
                            {t('Data.SectionThree.2.text.2')}
                        </p>
                        <p className='text-white text-right scroll-box-text pt-5'>
                            {t('Data.SectionThree.2.text.3')}
                        </p>
                        <p className='text-white text-right scroll-box-text'>
                            {t('Data.SectionThree.2.text.4')}
                        </p>
                        <p className='text-white text-right scroll-box-text'>
                            {t('Data.SectionThree.2.text.5')}
                        </p>
                    </div>
                    <div className='box  p-3 '>
                    <div className='d-flex  justify-content-between text-white '>
                            <img src={Scrollicon} alt="Logo" />
                            <p className='scroll-box-title  text-right m-0'>
                                {t('Data.SectionThree.3.text.1')}
                            </p>
                        </div>

                        <p className='text-white text-right scroll-box-title'>
                            {t('Data.SectionThree.3.text.2')}
                        </p>
                        <p className='text-white text-right scroll-box-text pt-5'>
                            {t('Data.SectionThree.3.text.3')}
                        </p>
                        <p className='text-white text-decoration text-right scroll-box-text'>
                            {t('Data.SectionThree.3.text.4')}
                        </p>
                        <p className='text-white text-decoration text-right scroll-box-text'>
                            {t('Data.SectionThree.3.text.5')}
                        </p>
                    </div>
                    <div className='box  p-3 '>
                    <div className='d-flex  justify-content-between text-white '>
                            <img src={Scrollicon} alt="Logo" />
                            <p className='scroll-box-title  text-right m-0'>
                                {t('Data.SectionThree.cards.1')}
                            </p>
                        </div>

                        <p className='text-white text-right scroll-box-title'>
                            {t('Data.SectionThree.cards.2')}
                        </p>
                        <p className='text-white text-right scroll-box-text pt-5'>
                            {t('Data.SectionThree.cards.3')}
                        </p>
                        <p className='text-white text-right scroll-box-text'>
                            {t('Data.SectionThree.cards.4')}
                        </p>
                    </div>
                    <div className='box  p-3 '>
                    <div className='d-flex  justify-content-between text-white '>
                            <img src={Scrollicon} alt="Logo" />
                            <p className='scroll-box-title  text-right m-0'>
                                {t('Data.SectionThree.cards.1')}
                            </p>
                        </div>

                        <p className='text-white text-right scroll-box-title'>
                            {t('Data.SectionThree.cards.2')}
                        </p>
                        <p className='text-white text-right scroll-box-text pt-5'>
                            {t('Data.SectionThree.cards.3')}
                        </p>
                        <p className='text-white text-right scroll-box-text'>
                            {t('Data.SectionThree.cards.4')}
                        </p>
                    </div>
                    <div className='box  p-3 '>
                    <div className='d-flex  justify-content-between text-white '>
                            <img src={Scrollicon} alt="Logo" />
                            <p className='scroll-box-title  text-right m-0'>
                                {t('Data.SectionThree.cards.1')}
                            </p>
                        </div>

                        <p className='text-white text-right scroll-box-title'>
                            {t('Data.SectionThree.cards.2')}
                        </p>
                        <p className='text-white text-right scroll-box-text pt-5'>
                            {t('Data.SectionThree.cards.3')}
                        </p>
                        <p className='text-white text-right scroll-box-text'>
                            {t('Data.SectionThree.cards.4')}
                        </p>
                    </div>
                    
                    
                </div>

            </div>

        </div>
    )
}