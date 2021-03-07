
import { useTranslation } from 'react-i18next';

import FooterMenu from '../FooterMenu';


import FooterLogo from '../../assets/images/footer-logo.svg';
import youtube from '../../assets/images/youtube.svg';
import FbIcon from '../../assets/images/Fb.svg';
import InIcon from '../../assets/images/In.svg';
import Apple from '../../assets/images/Apple.svg';
import Android from '../../assets/images/Android.svg';



import './style.css'


export default function Footer() {

    const { t } = useTranslation();

    return (
        <div className="footer background-color">
            <div className='container'>
                <div className='row logo-row'>

                    <div className=' left-box col-6'>
                        <img src={FooterLogo} alt="Logo" />
                    </div>

                    <div className='right-box d-flex align-items-center justify-content-end col-6'>

                        <img src={youtube} alt="Logo" />
                        <img src={FbIcon} alt="Logo" />
                        <img src={InIcon} alt="Logo" />

                    </div>

                </div>
                <div className='row'>

                    <FooterMenu title={t('Data.Footer.Individual.1')} items={[
                        t('Data.Footer.Individual.2'),
                        t('Data.Footer.Individual.3'),
                        t('Data.Footer.Individual.4'),
                        t('Data.Footer.Individual.5'),
                        t('Data.Footer.Individual.6'),
                    ]} />

                    <FooterMenu title={t('Data.Footer.ForBussines.1')} items={[
                        t('Data.Footer.ForBussines.2'),
                        t('Data.Footer.ForBussines.3'),
                        t('Data.Footer.ForBussines.4'),
                        t('Data.Footer.ForBussines.5'),
                        t('Data.Footer.ForBussines.6'),
                        t('Data.Footer.ForBussines.7')
                    ]} />


                    <FooterMenu title={t('Data.Footer.Company.1')} items={[
                        t('Data.Footer.Company.2'),
                        t('Data.Footer.Company.3'),
                        t('Data.Footer.Company.4'),
                        t('Data.Footer.Company.5')
                    ]} />


                    <FooterMenu title={t('Data.Footer.Contact.1')} items={[
                        t('Data.Footer.Contact.1'),
                        t('Data.Footer.Contact.2'),
                        t('Data.Footer.Contact.3'),
                        t('Data.Footer.Contact.5'),
                        t('Data.Footer.Contact.6')
                    ]} />

                    <div className='col-2 text'>
                        <h6>{t('Data.Footer.Apps.1')}</h6>
                        <div className='App-store row '>
                            <img src={Apple} alt="Logo" />
                        </div>

                    </div>
                    <div className='col-2 text p-top'>
                        <div className='App-store row '>
                            <img src={Android} alt="Logo" />
                        </div>

                    </div>

                </div>
                <div className='row text d-flex justify-content-between'>

                    <a href="https://www.example.com">{t('Data.Footer.Partners.1')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.2')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.3')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.4')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.5')}</a>
                    <a className='text-a' href="https://www.example.com">{t('Data.Footer.Partners.6')}</a>

                </div>
            </div>

        </div >

    )
}