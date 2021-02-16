import React from 'react';
import './Home.css'
import SectionOne from './HomeSections/SectionOne';
import SectionTwo from './HomeSections/SectionTwo';
import SectionThree from './HomeSections/SectionThree';
import SectionFour from './HomeSections/SectionFour';
import SectionFive from './HomeSections/SectionFive';
import SectionSix from './HomeSections/SectionSix';

export default function Home() {
  
  return(
    <div className="homeCenter">
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
    </div>
  )  
}


