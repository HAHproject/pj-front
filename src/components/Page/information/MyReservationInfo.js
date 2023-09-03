import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {apiGetresult} from "../../../common/api/apiGetService";

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
            <h1 className="table-title">My Reservation Info</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>RoomType</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>rId</th>
                </tr>
                </thead>
                <tbody>
                {reservationData.map((item) => (
                    <tr key={item.rId}>
                        <td>{item.amenityName}</td>
                        <td>{item.roomType}</td>
                        <td>{item.rDate}</td>
                        <td>{item.rId}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )};

export default MyReservationInfo;