import MyInfoChange from "../information/MyInfoChange";
import MyPoints from "../information/MyPoints";
import MyReservationInfo from "../information/MyReservationInfo";

const MyInfo = () => {

    return (
        <>
            <MyInfoChange>내 정보 수정</MyInfoChange>
            <MyPoints>내 포인트</MyPoints>
            <MyReservationInfo>내 예약 정보</MyReservationInfo>
        </>
    );
}

export default MyInfo;