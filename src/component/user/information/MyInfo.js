import React, { useState } from "react";
import MyPoints from "./MyPoints";
import MyInfoChange from "./MyInfoChange";
import MyReservationInfo from "./MyReservationInfo";

const MyInfo = () => {
    const [selectedTab, setSelectedTab] = useState(null);


    const renderSelectedTab = () => {
        if (selectedTab === "infoChange") {
            return <MyInfoChange />;
        } else if (selectedTab === "points") {
            return <MyPoints />;
        } else if (selectedTab === "reservationInfo") {
            return <MyReservationInfo />;
        } else {
            return null;
        }
    };

    return (
        <div>
            <ul className="horizontal-buttons">
                <button onClick={() => setSelectedTab("infoChange")}>내 정보 수정</button>
                <button onClick={() => setSelectedTab("points")}>내 포인트</button>
                <button onClick={() => setSelectedTab("reservationInfo")}>내 예약 정보</button>
            </ul>
            {renderSelectedTab()}
        </div>
    );
}

export default MyInfo;
