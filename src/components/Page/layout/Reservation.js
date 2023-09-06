import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetresult } from "../../../common/api/apiGetService";
import { Link } from "react-router-dom";
import styles from "../../../styles/Reservation/Reservation.module.css"; // 스타일을 가져옴

const Reservation = () => {
    const [amenityData, setAmenityData] = useState([]);
    const [selectedAmenityId, setSelectedAmenityId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1); // 페이지 번호

    const isLogin = useSelector((state) => state.loginCheck.loginInfo);

    useEffect(() => {
        loadAmenityData();
    }, [page]); // 페이지가 변경될 때마다 데이터 로드

    const loadAmenityData = () => {
        if (isLoading) return; // 이미 로딩 중이라면 중복 요청 방지

        setIsLoading(true);

        apiGetresult(page) // 페이지 번호를 서버로 전달하거나 필요한 방식으로 데이터 로드
            .then((res) => {
                setAmenityData((prevData) => [...prevData, ...res.data.amenity]);
                setPage((prevPage) => prevPage + 1); // 다음 페이지 번호 설정
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            // 스크롤이 맨 아래에 도달하면 다음 페이지 로드
            loadAmenityData();
        }
    };

    // 스크롤 이벤트 리스너 추가
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}> {/* 스타일을 적용 */}
            <h1 className={styles["table-title"]}>Amenity</h1> {/* 클래스 이름을 styles로 변경 */}
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
                        <td>
                            <Link to={`/info/${item.amenityId}`}>
                                <img src={item.image} alt={item.amenityName} /> {/* 이미지 추가 */}
                                {item.roomInfo}
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
