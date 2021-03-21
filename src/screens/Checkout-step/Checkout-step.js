

import { useState } from "react";
import AddPeoples from "../../components/AddPeoples";
import AutoInsurance from "../../components/AutoInsurance";
import CheckoutSteps from "../../components/CheckoutSteps";
import FormBox from "../../components/FormBox";
import FromBox1 from "../../components/FormBox1";
import PayBox from "../../components/PayBox";



function CheckoutStep() {
    const [step, setStep] = useState(1);

    const goNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }

    const goBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    return (
        <div>
            <AutoInsurance />
            <CheckoutSteps step={step} />

            {step === 1 && <AddPeoples />}
            {step === 2 && <FromBox1 />}
            {step === 3 && <FormBox />}
            <PayBox goNext={goNext} goBack={goBack} />



        </div>

    )
}




export default CheckoutStep;
