import { Outlet } from "react-router"
import NoticeMenuBox from "./NoticeMenuBox"
import { useSelector } from "react-redux"

const Notice = () => {
    const { isSmallScreen } = useSelector((state) => state.widthSizes)

    return <>
        <div className={isSmallScreen ? 'main-box-phone' : 'main-box'}>
            {!isSmallScreen &&
                <><div className="_left-box">
                    <div className="_button-list" >
                        <NoticeMenuBox />
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

export default Notice

