import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import OwnerMeneBox from "./OwnerMenuBox";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";


const Owner = () => {



    const { isSmallScreen } = useSelector((state) => state.widthSizes)


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