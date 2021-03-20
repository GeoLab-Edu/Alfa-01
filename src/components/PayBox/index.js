

import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Button from "../../components/Button";





import './style.css';



export default function PayBox() {
    return (
        <div className='container '>
            <div className='grey-background'>
                <p className='text-center gray-text text-white'>დაზღვევის ღირებულება</p>


                <div className=' justify-content-center row'>
                    <div className='gray-two-boxs '>
                        <div className='d-flex justify-content-between '>
                            <p className='text-white gray-text-p text-left'>დაზღვევის სრული ღირებულება:</p>
                            <p className='text-white gray-number text-right'>211.2$</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white gray-text-p'>დაზღვევის სრული ღირებულება (ფასდაკლებით):
    </p>
                            <p className='text-white gray-number'>179.52$</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <p className='text-center pay-text'>გადასახდელი თანხა</p>
                <p className='text-center gray-number'>46.85₾</p>
                <div className='d-flex alignt-itmes-center justify-content-center mb-5'>
                    <div className='d-flex align-items-center mr-2'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p className='m-0 ml-2'>უკან</p>
                    </div>


                    <Button title="შეძენა" type='small' />




                </div>


            </div>
        </div>
    )
}