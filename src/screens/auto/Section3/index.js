import Autoicon1 from '../../../assets/images/Autoicon1.svg'
import Autoicon2 from '../../../assets/images/Autoicon2.svg'
import Autoicon3 from '../../../assets/images/Autoicon3.svg'
import Button from "../../../../src/components/Button";




import './style.css';
export default function Section3() {
    return (
        <div className='container '>
            <div className='section3-box pt-3 pb-3 '>
                <p className='text-center'>მანქანის მართვის დროს გზა მოულოდნელობებით სავსეა.
                ავტომობილის დაზღვევით შეძლებ საკუთარი ფინანსების დაცვას და ისარგებლებ 24 საათიანი ავტო ასისტანსის მომსახურებით.
                ავტოსაგზაო შემთხვევისას, ავტო დაზღვევა დაგეხმარება,
                აღადგინო ან შეცვალო ავტომობილის დაზიანებული ნაწილები და დაუბრუნდე ცხოვრების ჩვეულ რიტმს უმოკლეს ვადაში.
            </p>
                <p className='text-center'>ჩვენ ვაზღვევთ ყველა სატრანსპორტო საშუალებას</p>
                <div className='d-flex justify-content-center'>
                    <ul>
                        <li>სედანი </li>
                        <li>ჰეჩბეკი</li>
                        <li>კუპე</li>
                        <li>კაბრიოლეტი</li>
                        <li>ჯიპი</li>
                        <li>უნივერსალი</li>

                    </ul>
                    <ul>
                        <li>პიკაპი </li>
                        <li>მინივენი</li>
                        <li>მიკროავტობუსი</li>
                        <li>ფურგუნი</li>
                        <li>სპეცტექნიკა</li>
                        <li>სხვა</li>

                    </ul>

                </div>
                <p className='text-center pb-4 pt-2'>ჩვენ ვაზღვევთ ნებისმიერი დანიშნულებით</p>
                <div className='d-flex justify-content-center'>
                    <div className='p-2'>
                        <img src={Autoicon1} alt="Logo" />
                        <p className='text-center m-0'>პირობები</p>
                    </div>
                    <div className='p-2 text-center'>
                        <img src={Autoicon2} alt="Logo" />
                        <p className='text-center m-0'>ხელშეკრულება</p>
                    </div>
                    <div className='p-2'>
                        <img src={Autoicon3} alt="Logo" />
                        <p className='text-center m-0'>ტარიფები</p>
                    </div>
                </div>
               
            </div>
            <div className='text-center font-weight-bolder mt-3 mb-5'>
            <Button title="შეძენა"/>
            </div>
           
        </div>
    )
}