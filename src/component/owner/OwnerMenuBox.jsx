import { Link, useLocation } from "react-router-dom"

const OwnerMeneBox = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2];





    return <>
        <Link to="/owner/apply" className={secondSegment === 'apply' ? 'in' : ''}> 업체 정보 등록 </Link>
        <Link to="/owner/room" className={secondSegment === 'room' ? 'in' : ''}> 객실 등록 </Link>
        <Link to="/owner/management" className={secondSegment === 'management' ? 'in' : ''}> 관리 </Link>



    </>

}



export default OwnerMeneBox