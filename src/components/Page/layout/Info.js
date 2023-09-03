import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetresult } from "../../../common/api/apiGetService";
import {Link} from "react-router-dom";

const Info = () => {
    const [roomData, setRoomData] = useState([]);
    const isLogin = useSelector((state) => state.loginCheck.loginInfo);

    useEffect(() => {
        apiGetresult()
            .then((res) => {
                setRoomData(res.data.info);
                console.log(res.data.info);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // 나머지 컴포넌트 내용


return (
    <div className="table-container">
        <h1 className="table-title">Rooms</h1>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>AmenityName</th>
                <th>...</th>
            </tr>
            </thead>
            <tbody>
            {roomData.map((item) => (
                <tr key={item.roomId}>
                    <td>{item.roomName}</td>
                    <td>{item.date}</td>
                    <td>{item.amenityName}</td>
                    <Link to={`/info/${item.amenityId}`}>{item.roomInfo}</Link>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
)
}
export default Info;