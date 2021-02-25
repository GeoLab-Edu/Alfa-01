
import { Carousel } from "react-bootstrap"

import Agrophoto from '../../../assets/images/Agrophoto.svg'
import Truckphoto from '../../../assets/images/Truckphoto.svg'
import Agroicon from '../../../assets/images/Agroicon.svg'
import Truckicon from '../../../assets/images/Truckicon.svg'



import './style.css'
export default function Section4() {
    return (
        <div className='section6 container slider'>
            <h1 className='text-center mt-5 '>შენი ბიზნესისთვის</h1>
            <p className='text-center text-black mb-4'>
                დაცულია თუ არა შენი ბიზნესი? იცი რა ეღირება შენი ბიზნესის დაცვა?
                ალდაგი უზრუნველყოფს სადაზღვევო დაფარვებს ათი ათასობით მცირე მეწარმისთვის.
                ჩვენ გთავაზოვთ შენი ბიზნეს საქმიანობის უნიკალურ საჭიროებებზე მორგებულ დაფარვებს.
                რეკომენდაციას უწევს ალდაგს.
            </p>

            <Carousel className='carusel'>
                <Carousel.Item>
                    <div className='d-flex justify-content-center'>
                        <div className='position-relative'>
                            <img src={Agrophoto} alt="img" />
                            <p className='text-center m-2'>აგრო დაზღვევა</p>
                            <div className='position-absolute agro-icon'>
                                <img src={Agroicon} alt="img" />
                            </div>
                        </div>


                        <div className='position-relative'>
                            <img src={Truckphoto} alt="img" />
                            <p className='text-center m-2'>ტვირთის დაზღვევა</p>
                            <div className='position-absolute truckicon'>
                                <img src={Truckicon} alt="img" />
                            </div>
                        </div>

                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className='d-flex justify-content-center'>
                        <div className='position-relative'>
                            <img src={Agrophoto} alt="img" />
                            <p className='text-center m-2'>აგრო დაზღვევა</p>
                            <div className='position-absolute agro-icon'>
                                <img src={Agroicon} alt="img" />
                            </div>
                        </div>

                        <div className='position-relative'>
                            <img src={Truckphoto} alt="img" />
                            <p className='text-center m-2'>ტვირთის დაზღვევა</p>
                            <div className='position-absolute truckicon'>
                                <img src={Truckicon} alt="img" />
                            </div>
                        </div>

                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className='d-flex justify-content-center'>
                        <div className='position-relative'>
                            <img src={Agrophoto} alt="img" />
                            <p className='text-center m-2'>აგრო დაზღვევა</p>
                            <div className='position-absolute agro-icon'>
                                <img src={Agroicon} alt="img" />
                            </div>
                        </div>

                        <div className='position-relative'>
                            <img src={Truckphoto} alt="img" />
                            <p className='text-center m-2'>ტვირთის დაზღვევა</p>
                            <div className='position-absolute truckicon'>
                                <img src={Truckicon} alt="img" />
                            </div>
                        </div>

                    </div>

                </Carousel.Item>

            </Carousel>

        </div>
    )
}