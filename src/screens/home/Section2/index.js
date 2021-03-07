import { useTranslation } from 'react-i18next';

import IMG1 from '../../../components/Header/images/1.png';
import SVG1 from '../../../components/Header/images/1.svg';
import IMG2 from '../../../components/Header/images/2.png';
import SVG2 from '../../../assets/images/SVGICON2.svg';
import IMG3 from '../../../components/Header/images/3.png';
import SVG3 from '../../../assets/images/SVGICON3.svg';
import IMG4 from '../../../components/Header/images/4.png';
import SVG4 from '../../../assets/images/SVGICON4.svg';
import IMG5 from '../../../components/Header/images/5.png';
import SVGICON from '../../../assets/images/SVGICON.svg';
import IMG6 from '../../../components/Header/images/6.png';
import SVGICON6 from '../../../assets/images/SVGICON6.svg';



import './style.css';
export default function SectionTwo() {

    const { t } = useTranslation();

    return (
        <div className="sectionOne container">
            <div className='title-sectionone text-center'>
                <h1>შენთვის</h1>
                <p className='m-0'>{t('Data.SectionTwo.title.2')}</p>
                <p className=' text-p '>{t('Data.SectionTwo.title.3')}</p>
            </div>
            <div className='row'>
                <div className='col-4 pr-0 text-center position-relative'>
                    <img src={IMG1} alt="img" />
                    <p className='pt-2 '>{t('Data.SectionTwo.insurance.1')}</p>
                    <div className='svgicon position-absolute'> <img src={SVG1} alt="img" /> </div>
                </div>
                <div className='col-4 pr-3 text-center position-relative '>
                    <img src={IMG2} alt="img" />
                    <p className='pt-2'>{t('Data.SectionTwo.insurance.2')}</p>
                    <div className='svgicon position-absolute'> <img src={SVG2} alt="img" /> </div>
                </div>
                <div className='col-4 pr-3 text-center position-relative'>
                    <img src={IMG3} alt="img" />
                    <p className='pt-2'>{t('Data.SectionTwo.insurance.3')}</p>
                    <div className='svgicon position-absolute'> <img src={SVG3} alt="img" /> </div>
                </div>
                <div className='col-4 pr-0 pt-2 text-center position-relative'>
                    <img src={IMG4} alt="img" />
                    <p className='pt-2 pb-0'>{t('Data.SectionTwo.insurance.4')}</p>
                    <div className='svgicon position-absolute'> <img className='' src={SVG4} alt="img" /> </div>
                </div>

                <div className='col-4 pr-3 pt-2 text-center position-relative'>
                    <img src={IMG5} alt="img" />
                    <p className='pt-2 pb-0'>{t('Data.SectionTwo.insurance.5')}</p>
                    <div className='position-absolute svgicon'>
                        <img src={SVGICON} alt="img" />
                    </div>
                </div>
                <div className='col-4 pr-3 pt-2 text-center'>
                    <img src={IMG6} alt="img" />
                    <p className='pt-2 pb-0'>{t('Data.SectionTwo.insurance.6')}</p>
                    <div className='position-absolute svgicon'>
                        <img src={SVGICON6} alt="img" />
                    </div>
                </div>
            </div>

        </div>

    )
}