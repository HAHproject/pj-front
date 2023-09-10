import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../../styles/reservation/Reservation.module.css";
import { AmenityList } from "../../data/DataList";

const Reservation = () => {
    const [amenityData, setAmenityData] = useState(AmenityList.slice(0, 10)); // 처음 10개만 렌더링
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const isLogin = useSelector((state) => state.loginCheck.loginInfo);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            loadMoreData();
        }
    };

    const loadMoreData = () => {
        const nextAmenityData = AmenityList.slice(page * 10, (page + 1) * 10);
        setIsLoading(true);

        setTimeout(() => {
            setAmenityData((prevData) => [...prevData, ...nextAmenityData]);
            setPage((prevPage) => prevPage + 1);
            setIsLoading(false);
        }, 1000); // 1초 지연을 통한 시뮬레이션
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles["table-title"]}>Amenity</h1>
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
                {AmenityList.map((data) => (
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.region}</td>
                        <td>{data.price}</td>
                        <td>
                            <Link to={`/info`}>
                                <img src={data.img} alt={data.amenityName} />
                                {data.roomInfo}
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {isLoading && <p>Loading...</p>}
        </div>
    );
};

export default Reservation;
