import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetresult } from "../../../network/api/apiGetService";
import {Link} from "react-router-dom";
import {RoomList} from "../../../data/DataList"

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
                <th>RoomName</th>
                <th>Price</th>
                <th>Date</th>
                <th>AmenityName</th>
                <th>RoomInfo</th>
                <th>...</th>
            </tr>
            </thead>
            <tbody>
            {RoomList.map((data) => (
                <tr key={data.rId}>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.date}</td>
                    <td>{data.amenityName}</td>
                    <Link to={`/roomInfo`}>{data.rId}</Link>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
)
}
export default Info;