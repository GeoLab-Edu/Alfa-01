import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
// import IMG from '../../../components/Header/images/home-photo.png';

import './style.css';


export default function Section1() {

  const { t } = useTranslation();


  return (
    <React.Fragment>

      <div className="sectionOneDiv ">

        <Carousel>
          <Carousel.Item>
            <div className='background-section1 position-relative fluid-container'>
              <div className='clip position-absolute '>
              </div>
              <div className=' section1-div  position-absolute  row w-100' >
                <div className='container'>
                  <div className='with-div'>
                  <h2 className='text-white mb-2'>{t('Data.SectionOne.1')}</h2>
                  <div className='border-red mb-2'></div>
                  <p className='text-white'>{t('Data.SectionOne.2')} {t('Data.SectionOne.3')}</p>
                  </div>
                
                </div>

              </div>
            </div>

          </Carousel.Item>
          <Carousel.Item>
          <div className='background-section1 position-relative fluid-container'>
              <div className='clip position-absolute '>
              </div>
              <div className=' section1-div  position-absolute  row w-100' >
                <div className='container'>
                  <div className='with-div'>
                  <h2 className='text-white mb-2'>{t('Data.SectionOne.1')}</h2>
                  <div className='border-red mb-2'></div>
                  <p className='text-white'>{t('Data.SectionOne.2')} {t('Data.SectionOne.3')}</p>
                  </div>
                
                </div>

              </div>
            </div>

          </Carousel.Item>
          <Carousel.Item>
          <div className='background-section1 position-relative fluid-container'>
              <div className='clip position-absolute '>
              </div>
              <div className=' section1-div  position-absolute  row w-100' >
                <div className='container'>
                  <div className='with-div'>
                  <h2 className='text-white mb-2'>{t('Data.SectionOne.1')}</h2>
                  <div className='border-red mb-2'></div>
                  <p className='text-white'>{t('Data.SectionOne.2')} {t('Data.SectionOne.3')}</p>
                  </div>
                
                </div>

              </div>
            </div>

          </Carousel.Item>
        </Carousel>
      </div>

    </React.Fragment>
  );
}