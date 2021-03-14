



import { useTranslation } from 'react-i18next';
import './style.css';

export default function Section1(){

  const { t } = useTranslation();



    return(

    <div>
        <div className='background-auto-section1 position-relative fluid-container'>
              <div className='clip position-absolute '>
              </div>
              <div className=' section-auto  position-absolute  row w-100' >
                <div className='container '>
                  <div className='with-div'>
                  <h2 className='text-white mb-2'>{t('Data-auto.Section1.1')}</h2>
                  <div className='border-red mb-2'></div>
                  <p className='text-white'>{t('Data-auto.Section1.2')}
                </p>
                  </div>
                
                </div>

              </div>
            </div>
    </div>
    )
}