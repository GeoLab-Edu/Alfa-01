
import { useTranslation } from 'react-i18next';
import Auto1 from '../../../assets/images/Auto1.svg';
import Auto2 from '../../../assets/images/Auto2.svg';
import Auto3 from '../../../assets/images/Auto3.svg';
import SVGICON2 from '../../../assets/images/SVGICON2.svg';

import './style.css';
export default function Section2() {

    const { t } = useTranslation();


    return (
        <div className="sectionOne container">

            <div className='row'>
                <div className='col-4 pr-0 text-center position-relative'>
                    <img src={Auto1} alt="img" />
                    <p className='pt-2 '>{t('Data-auto.Section2.1')}</p>
                    <div className='svgicon position-absolute'> <img src={SVGICON2} alt="img" /> </div>
                </div>
                <div className='col-4 pr-3 text-center position-relative '>
                    <img src={Auto2} alt="img" />
                    <p className='pt-2'>{t('Data-auto.Section2.2')}</p>
                    <div className='svgicon position-absolute'> <img src={SVGICON2} alt="img" /> </div>
                </div>
                <div className='col-4 pr-3 text-center position-relative'>
                    <img src={Auto3} alt="img" />
                    <p className='pt-2'>{t('Data-auto.Section2.3')}</p>
                    <div className='svgicon position-absolute'> <img src={SVGICON2} alt="img" /> </div>
                </div>

            </div>
        </div>


    )
}