import classes from "./paymentIndex.css"
import PaymentBox from "./PaymentBox";
import { useState } from 'react';
import {useSelector} from "react-redux";

const PaymentPage = () => {
    const { isSmallScreen } = useSelector((state) => state.widthSizes)



    return (
        <div className={isSmallScreen ? 'pMain-box-phone' : 'pMain-box'}>
           <PaymentBox></PaymentBox>
        </div>
    )
}

export default PaymentPage;