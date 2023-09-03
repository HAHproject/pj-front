import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {apiGetresult} from "../../../common/api/apiGetService";
import {Link} from "react-router-dom";

const Reservation = () => {
    const [amenityData, setAmenityData] = useState([]);
    const [selectedAmenityId, setSelectedAmenityId] = useState(null);
    const isLogin = useSelector(state => state.loginCheck.loginInfo);

    useEffect(() => {
        apiGetresult()
            .then((res) => {
                setAmenityData(res.data.amenity);
                console.log(res.data.amenity);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="table-container">
            <h1 className="table-title">Amenity</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Region</th>
                    <th>Price</th>
                    <th>RoomInfo</th>
                </tr>
                </thead>
                <tbody>
                {amenityData.map((item) => (
                    <tr key={item.amenityId}>
                        <td>{item.amenityName}</td>
                        <td>{item.amenityRegion}</td>
                        <td>{item.amenityPrice}</td>
                        <Link to={`/info/${item.amenityId}`}>{item.roomInfo}</Link>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Reservation;