

import AddPeoples from "../../components/AddPeoples";
import AutoInsurance from "../../components/AutoInsurance";
import CheckoutSteps from "../../components/CheckoutSteps";
import FormBox from "../../components/FormBox";
import FromBox1 from "../../components/FormBox1";
import PayBox from "../../components/PayBox";



function CheckoutStep() {
    return (
        <div>
            <AutoInsurance />

            <CheckoutSteps />
            <AddPeoples/>
            {/* <FromBox1 /> */}
            <FormBox />
            <PayBox />



        </div>

    )
}




export default CheckoutStep;
