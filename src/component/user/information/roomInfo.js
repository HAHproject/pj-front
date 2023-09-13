import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RoomInfo} from "../../data/DataList";

const roomInfo = () => {


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
                    <th>...</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={`${RoomInfo.id}`}>
                        <td>{RoomInfo.name}</td>
                        <td>{RoomInfo.price}</td>
                        <td>{RoomInfo.date}</td>
                        <td>{RoomInfo.amenityName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default roomInfo;