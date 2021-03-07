



import { NavLink } from 'react-bootstrap';
import './style.css';

export default function Section1() {
  return (

    <div>
      <div className='background-auto-section1 position-relative fluid-container'>
        <div className='clip position-absolute '>
        </div>
        <div className=' section-auto  position-absolute  row w-100' >
          <div className='container '>


            <NavLink  className='position-absolute  text-white link-a-auto ' to="/Home">
              მთავარი > ჩემთვის > ავტოდაზღვევა
                </NavLink>

            <div className='with-div with-div-auto'>
              <div className='with-div-text'>
                <h2 className='text-white mb-2'>დააზღვიე ავტომობილი თვეში 60 ლარად</h2>
                <div className='border-red mb-2'></div>
                <p className='text-white'>ისარგებლეთ სერვისებით ნებისმიერ, დროს 24 საათიანი ასისტანსი.
</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}