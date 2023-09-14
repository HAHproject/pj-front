import { Link, useLocation } from "react-router-dom";
import "../layout/SideMenuBox.css"
import classes from "../../main/mainLogin/mainLogin.module.css"

const SideMenuBox = () => {


    const location = useLocation();
    const pathSegments = location.pathname.split('/');


    return <>
        <Link to="/amenity/motel"> 모텔 </Link>
        <Link to="/amenity/hotel" > 호텔 </Link>
        <Link to="/amenity/pension" > 펜션 </Link>
        <Link to="/amenity/guestHouse" > 게스트하우스 </Link>
        <Link to="/amenity/camping" > 캠핑 </Link>
    </>

}

export default SideMenuBox;