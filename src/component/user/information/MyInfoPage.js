
import { useState } from 'react';
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import MyInfoBox from "./MyInfoBox";
import '../../owner/Owner.css'



const MyInfoPage = () => {

    const { isSmallScreen } = useSelector((state) => state.widthSizes)


    return <>
        <div className={isSmallScreen ? 'main-box-phone' : 'main-box'}>
            {!isSmallScreen &&
                <><div className="_left-box">
                    <div className="_button-list" >
                        <MyInfoBox/>
                    </div >
                </div></>}
            <div className="_right-box">
                <div className="_right-list">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>





    </>

}

export default MyInfoPage;