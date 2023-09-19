import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {apiGetRoomResult} from "../../../network/api/apiGetService";
import {Link} from "react-router-dom";
import {RoomList} from "../../../data/DataList"
import img from "../../../images/saintHotel.jpg";

const Info = () => {
    const [roomData, setRoomData] = useState([]);
    const isLogin = useSelector((state) => state.loginCheck.loginInfo);

    useEffect(() => {
        apiGetRoomResult()
            .then((res) => {
                setRoomData(res.room.info);
                console.log(res.room.info);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // 나머지 컴포넌트 내용


return (

    <div style={{display: "flex", flexDirection: "column", margin: "100px auto", width:"1024px"}}>
        <div style={{margin: "20px"}}>
            <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr 1fr', fontSize: "17pt", fontWeight: "bold", color: "gray", justifyItems:"center"} }>
                <div>대표 이미지</div>
                <div>방이름</div>
                <div>방가격</div>
                <div>숙박일자</div>
                <div>숙소명</div>
                <></>
            </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", fontSize: "17pt", fontWeight: "bold",alignItems:"center", backgroundColor:"floralwhite", maxWidth: "1024px" }}>
            {RoomList.map((room) => (
                <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr 1fr ', justifyItems:"center", margin:"20px", alignItems: "center"}} key={room.id}>
                    <img src={img} alt={room.img}  style={{ maxWidth: '256px', height: 'auto', display:"flex", margin:"10px"}} />
                    {room.img}
                    <div>{room.name}</div>
                    <Link to={`/payment`}>
                        <div style={{ maxWidth: '512px', height: 'auto' , textAlign:"center"}}>
                            {room.price}
                        </div>
                    </Link>
                    <div>{room.date}</div>
                    <div>{room.amenityName}</div>
                </div>
            ))}
        </div>
    </div>
)
}
export default Info;