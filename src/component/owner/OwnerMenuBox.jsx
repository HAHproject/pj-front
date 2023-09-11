import { Link, useLocation } from "react-router-dom"

const OwnerMeneBox = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2];





    return <>
        <Link to="/owner/apply" className={secondSegment === 'apply' ? 'in' : ''}> 영업 신청 </Link>
        <Link to="/owner/room" className={secondSegment === 'room' ? 'in' : ''}> 등록 및 심사 </Link>
        <Link to="/owner/management" className={secondSegment === 'management' ? 'in' : ''}> 관리 </Link>



    </>

}



export default OwnerMeneBox