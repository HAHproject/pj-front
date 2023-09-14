import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {apiGetresult} from "../../../network/api/apiGetService"
import {myReservation} from "../../../data/DataList";

const MyReservationInfo = () => {


    const [reservationData, setReservationData] = useState([]);
    const [selectedRId, setRId] = useState(null);
    const isLogin = useSelector(state => state.loginCheck.loginInfo);

    useEffect(() => {
        apiGetresult()
            .then((res) => {
                setReservationData(res.data.reservation);
                console.log(res.data.reservation);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="table-container">
            <h1 style={{color: "#f7323f"}} className="table-title">내 예약 정보</h1>
            <div>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr', textAlign:"center", margin: "30px 0", fontWeight: "Bold"}}>
                    <div>Name</div>
                    <div>RoomType</div>
                    <div>Date</div>
                    <div>Price</div>
                    <div>rId</div>
                </div>

                <div style={{display:"flex", flexDirection: "column", gap:"20px"}}>
                {myReservation.map((data)=> <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr', textAlign:"center"}} key={data.id}key={data.rId}>
                <div>{data.name}</div>
                <div>{data.rType}</div>
                <div>{data.rDate}</div>
                <div>{data.rPrice}</div>
                <div>{data.rId}</div>
                </div> )}
                </div>
            </div>
        </div>
    )};

export default MyReservationInfo;