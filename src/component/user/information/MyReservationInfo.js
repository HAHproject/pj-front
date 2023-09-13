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

                {myReservation.map((data)=> <tr key={data.rId}>
                <td>{data.name}</td>
                <td>{data.rType}</td>
                <td>{data.rDate}</td>
                <td>{data.rPrice}</td>
                <td>{data.rId}</td>
                </tr> )}


                {/*<tr key={myReservation.rId}>*/}
                {/*    <td>{myReservation.name}</td>*/}
                {/*    <td>{myReservation.rType}</td>*/}
                {/*    <td>{myReservation.rDate}</td>*/}
                {/*    <td>{myReservation.rPrice}</td>*/}
                {/*    <td>{myReservation.rId}</td>*/}
                {/*</tr>*/}
                {/*{reservationData.map((item) => (*/}
                {/*    <tr key={item.rId}>*/}
                {/*        <td>{item.amenityName}</td>*/}
                {/*        <td>{item.roomType}</td>*/}
                {/*        <td>{item.rDate}</td>*/}
                {/*        <td>{item.rId}</td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                </tbody>
            </table>
        </div>
    )};

export default MyReservationInfo;