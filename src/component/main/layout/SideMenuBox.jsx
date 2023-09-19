import { Link, useLocation } from "react-router-dom";
import "../layout/SideMenuBox.css"
import classes from "../../main/mainLogin/mainLogin.module.css"

const SideMenuBox = () => {


    const location = useLocation();
    const pathSegments = location.pathname.split('/');


    return <>
        <Link to="/acco/motel"> 모텔 </Link>
        <Link to="/acco/hotel" > 호텔 </Link>
        <Link to="/acco/pansion" > 펜션 </Link>
        <Link to="/acco/guestHouse" > 게스트하우스 </Link>
        <Link to="/acco/camping" > 캠핑 </Link>
    </>

}

export default SideMenuBox;