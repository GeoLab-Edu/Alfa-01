





import './style.css';
export default function CheckoutSteps() {
    return (
        <div className='steper-wrapper container d-flex p-0 position-relative'>

            <div className="box-wrapper d-flex">
                <div>
                    <div className='step-box  d-flex align-items-center justify-content-center box-active'>
                        <p className='m-0 step-box-p text-white'>1</p>
                    </div>
                    <p className='text-center'>დაწყება</p>
                </div>
                <div>
                    <div className='step-box d-flex align-items-center justify-content-center'>
                        <p className='m-0 step-box-p'>2</p>
                    </div>
                    <p className='text-center'>პოლისი</p>
                </div>
                <div>
                    <div className='step-box d-flex align-items-center justify-content-center'>
                        <p className='m-0 step-box-p'>3</p>
                    </div>
                    <p className='text-center'>მძღოლები</p>
                </div>
                <div>
                    <div className='step-box d-flex align-items-center justify-content-center'>
                        <p className='m-0 step-box-p'>4</p>
                    </div>
                    <p className='text-center'>
                        პირები </p>
                </div>
                <div>
                    <div className='step-box d-flex align-items-center justify-content-center '>
                        <p className='m-0 step-box-p'>5</p>
                    </div>
                    <p className='text-center'>ავტომობილი</p>
                </div>
                <div>
                    <div className='step-box d-flex align-items-center justify-content-center'>
                        <p className='m-0 step-box-p'>6</p>
                    </div>
                    <p className='text-center'>გადახდა</p>
                </div>
            </div>

            <div className='ckeckout-line position-absolute '>

            </div>

        </div>
    )
}