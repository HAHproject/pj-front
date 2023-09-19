import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AmenityList } from "../../../data/DataList";
import SideMenuBox from "../../main/layout/SideMenuBox"
import FilterMenuBox from "../../main/layout/FilterMenuBox"
import styles from "./Reservation.module.css"
import img from "../../../images/saintHotel.jpg"
import { api, apiNoToken } from "../../../network/api";


const ReservationMotel = () => {
    const [amenityData, setAmenityData] = useState();
    const [page, setPage] = useState(1);

    const { isLogin } = useSelector((state) => state.loginCheck.loginInfo);
    console.log(isLogin)


    const getAmenity = async () => {

        const { data } = await apiNoToken('api/v1/acco/motel')

        console.log(data)

        setAmenityData(data.slice(0, 10))
    }

    useEffect(() => {

        getAmenity()
    }, [])

    return <div className={styles.all}>

        <div className={styles.total}>
            <div className={styles.menu}>
                <SideMenuBox />
            </div>
            <div className={styles.filter}>
                <FilterMenuBox />
            </div>
            <div className={styles.container}>
                <div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 4fr', margin: "20px", fontSize: "17pt", fontWeight: "bold", color: "gray", textAlign: "center" }}>
                            <div>숙소 명</div>
                            <div>지역</div>
                            <div>홈페이지</div>
                            <div>숙소 정보</div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "17pt", fontWeight: "bold", textAlign: "center" }}>
                        {amenityData && amenityData.map((data) => (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 4fr' }} key={data.id}>
                                <div>{data.accoName}</div>
                                <div>{data.sido}</div>
                                <div>{data.homePage}</div>
                                <div>
                                    <Link to={`/info${data.id}`}>
                                        <img src={data.img} alt={data.imgName} style={{ Width: '370px', height: '250px' }} />
                                        {data.roomInfo}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </div>
};

export default ReservationMotel;
