
import { useEffect, useState } from 'react';
import OwnerMeneBox from "./OwnerMenuBox";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";


const Owner = () => {

    const token = localStorage.getItem('token')
    const nav = useNavigate()




    const { isSmallScreen } = useSelector((state) => state.widthSizes)
    if (!token) {
        alert('로그인을 해주세요')

        nav('/main')
        return


    }

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