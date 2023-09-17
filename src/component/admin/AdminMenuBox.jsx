// import { useDispatch } from "react-redux";
// import { setPage } from "../../feature/adminPageSlice";

import { Link, useLocation } from "react-router-dom";
import '../admin/AdminMenuBox.css'



const AdminMenuBox = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2];

    return <>

        <Link to="/admin/apply" className={secondSegment === 'apply' ? 'in' : ''}> 영업 승인 </Link>
        <Link to="/admin/room" className={secondSegment === 'room' ? 'in' : ''}> 업주 관리 </Link>
        <Link to="/admin/log" className={secondSegment === 'log' ? 'in' : ''}> 결제 기록 </Link>
        <Link to="/admin/statistics" className={secondSegment === 'statistics' ? 'in' : ''}>통계 </Link>

        {/* 여긴 순수하게 버튼만 냅두고 쓰는 쪽에서 하위 a태그를 활용해서 쓰는 것이 좋아보임.*/}
    </>

}

export default AdminMenuBox