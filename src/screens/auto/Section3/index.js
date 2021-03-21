import Autoicon1 from '../../../assets/images/Autoicon1.svg'
import Autoicon2 from '../../../assets/images/Autoicon2.svg'
import Autoicon3 from '../../../assets/images/Autoicon3.svg'
import Button from "../../../../src/components/Button";




import './style.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-bootstrap';
export default function Section3() {


    const { t } = useTranslation();


    return (
        <div className='container '>
            <div className='section3-box pt-3 pb-3 '>
                <p className='text-center'>{t('Data-auto.Section3.1')}
            </p>
                <p className='text-center'>{t('Data-auto.Section3.2')}</p>
                <div className='d-flex justify-content-center'>
                    <ul>
                        <li>{t('Data-auto.Section3.3')} </li>
                        <li>{t('Data-auto.Section3.4')}</li>
                        <li>{t('Data-auto.Section3.5')}</li>
                        <li>{t('Data-auto.Section3.6')}</li>
                        <li>{t('Data-auto.Section3.7')}</li>
                        <li>{t('Data-auto.Section3.8')}</li>
                        <li>{t('Data-auto.Section3.9')}</li>
                        <li>{t('Data-auto.Section3.10')}</li>
                    </ul>
                </div>
                <p className='text-center pb-4 pt-2'>{t('Data-auto.Section3.11')}</p>
                <div className='d-flex justify-content-center'>
                    <div className='p-2'>
                        <img src={Autoicon1} alt="Logo" />
                        <p className='text-center m-0'>{t('Data-auto.Section3.12')}</p>
                    </div>
                    <div className='p-2 text-center'>
                        <img src={Autoicon2} alt="Logo" />
                        <p className='text-center m-0'>{t('Data-auto.Section3.13')}</p>
                    </div>
                    <div className='p-2'>
                        <img src={Autoicon3} alt="Logo" />
                        <p className='text-center m-0'>{t('Data-auto.Section3.14')}</p>
                    </div>
                </div>
               
            </div>
            <div className='text-center font-weight-bolder mt-3 mb-5'>
                <NavLink href="/auto-insurance" className="d-inline-block"><Button title={t('Data-auto.Section3.15')}/></NavLink>
            </div>
           
        </div>
    )
}

