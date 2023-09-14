import { Link, useLocation } from "react-router-dom";

const NoticeMenuBox = () => {


    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2];
    return <>

        <Link to="/notice/announcement" className={secondSegment === 'announcement' ? 'in' : ''}> 공지 사항 </Link>
        <Link to="/notice/event" className={secondSegment === 'event' ? 'in' : ''}> 이벤트 </Link>
        <Link to="/notice/ques" className={secondSegment === 'ques' ? 'in' : ''}> 1:1 문의 </Link>
    </>
}

export default NoticeMenuBox;