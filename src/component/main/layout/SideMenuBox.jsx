import { Link, useLocation } from "react-router-dom";
import "../layout/SideMenuBox.css"

const SideMenuBox = () => {


    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2];


    return <>
        <Link to="/admin/apply" className={secondSegment === 'apply' ? 'in' : ''}> 모텔 </Link>
        <Link to="/admin/room" className={secondSegment === 'room' ? 'in' : ''}> 호텔 </Link>
        <Link to="/admin/log" className={secondSegment === 'log' ? 'in' : ''}> 펜션 </Link>
        <Link to="/admin/statistics" className={secondSegment === 'statistics' ? 'in' : ''}> 게스트하우스 </Link>
        <Link to="/admin/statistics" className={secondSegment === 'statistics' ? 'in' : ''}> 캠핑 </Link>
    </>

}

export default SideMenuBox;