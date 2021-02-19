

import FooterLogo from '../../assets/images/footer-logo.svg';
import youtube from '../../assets/images/youtube.svg';
import FbIcon from '../../assets/images/Fb.svg';
import InIcon from '../../assets/images/In.svg';
import Apple from '../../assets/images/Apple.svg';
import Android from '../../assets/images/Android.svg';



import './style.css'


export default function Footer() {
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

                    <div className='col-2 text'>
                        <h6>ჩემთვის</h6>
                        <p>ჯანმრთელობის</p>
                        <p>ავტომობილის</p>
                        <p>სამოგზაურო</p>
                        <p>ქონების</p>
                        <p>პროფესიული პასიხისმგებლობის</p>

                    </div>
                    <div className='col-2 text'>
                        <h6>ბიზნესისთვის</h6>
                        <p>საბანკო გარანტია</p>
                        <p>ავტომობილის</p>
                        <p>ტვირთის</p>
                        <p>ქონების</p>
                        <p>აგრო</p>
                        <p>პროფესიული პასიხისმგებლობის</p>
                    </div>
                    <div className='col-2 text'>
                        <h6>ვინ ვართ</h6>
                        <p>ისტორია</p>
                        <p>კარიერა</p>
                        <p>ბლოგი</p>
                        <p>ჯანმრთელობა</p>
                        <p>ჯანმრთელობა</p>
                        <p>ჯანმრთელობა</p>
                    </div>
                    <div className='col-2 text'>
                        <h6>კონტაქტი</h6>
                        <p>ცხელი ხაზი</p>
                        <p>ონლაინ კონსულტაცია</p>
                        <p>ანონიმური შეტყობინება</p>
                        <p>საპრეტენზიო წერილი</p>
                        <p>ფილიალები</p>

                    </div>
                    <div className='col-2 text'>
                        <h6>ჩვენი აპლიკაციები</h6>
                        <div className='App-store row justify-content-end'>
                            <img src={Apple} alt="Logo" />
                        </div>

                    </div>
                    <div className='col-2 text'>
                        <h6>ჯანმრთელობა</h6>
                        <div className='App-store row justify-content-end'>
                            <img src={Android} alt="Logo" />
                        </div>

                    </div>

                </div>
                <div className='row text d-flex justify-content-between'>

                    <a href="https://www.example.com">ავერსი რაციონალი</a>
                    <a href="https://www.example.com">ავერსის კლინიკა</a>
                    <a href="https://www.example.com">ავერსის ფარმა</a>
                    <a href="https://www.example.com">ჰოსპიტალური ქსელი</a>
                    <a href="https://www.example.com">ქირურგიული ეროვნული</a>
                    <a href="https://www.example.com">ბოჭორიშვილის კლინიკა</a>

                </div>
            </div>

        </div>

    )
}