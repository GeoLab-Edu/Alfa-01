


import './style.css';
export default function CheckoutSteps({ step }) {
    const blocks = [
        "დაწყება", "პოლისი", "მძღოლები", "პირები", "ავტომობილი", "გადახდა"
    ]

    return (
        <div className='steper-wrapper container d-flex p-0 position-relative'>

            <div className="box-wrapper d-flex">
                {blocks.map((title, i) => {
                    const number = i + 1;

                    return (<div>
                        <div className={`step-box  d-flex align-items-center justify-content-center ${number <= step ? 'box-active' : ''}`}>
                            <p className={`m-0 step-box-p ${number <= step ? 'text-white' : ''}`}>{number}</p>
                        </div>
                        <p className='text-center'>{title}</p>
                    </div>)
                })}
            </div>
            <div className='ckeckout-line position-absolute '>
            </div>
        </div>
    )
}