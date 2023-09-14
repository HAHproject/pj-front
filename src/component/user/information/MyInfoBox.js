import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";

const MyInfoBox = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2];

    return (
        <>
                <Link to="/myInfo/update" className={secondSegment === 'update' ? 'in' : ''}>내 정보 수정</Link>
                <Link to="/myInfo/points" className={secondSegment === 'points' ? 'in' : ''}>내 포인트</Link>
                <Link to="/myInfo/rInfo" className={secondSegment === 'rInfo' ? 'in' : ''}>내 예약 정보</Link>
        </>


    );
}

export default MyInfoBox;
