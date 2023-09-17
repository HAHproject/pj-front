
import { useState } from 'react';
import OwnerMeneBox from "./OwnerMenuBox";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";


const Owner = () => {

    const { isSmallScreen } = useSelector((state) => state.widthSizes)

    // 여기 있는 css 전부 common.css 로 빼도 될거같은데 ... 나중에 해보자.

    return <>
        <div className={isSmallScreen ? 'main-box-phone' : 'main-box'}>
            {!isSmallScreen &&
                <><div className="_left-box">
                    <div className="_button-list" >
                        <OwnerMeneBox />
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

export default Owner