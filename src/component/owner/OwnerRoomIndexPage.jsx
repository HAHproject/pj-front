import { useEffect, useState } from "react"
import { data } from "./data"
import './OwnerRoomIndexPage.css'
import { api, apiNoToken } from "../../network/api"
import { useSelector } from "react-redux"
import { OwnerCategory } from "./OwnerCategory"
import { useNavigate } from "react-router"

const OwnerRoomIndexPage = () => {

    const [data, setData] = useState()

    const nav = useNavigate()


    //  여기서 api 쏴서 기본 데이터를 받아와야함.

    const user = useSelector(state => state.user)

    const navHander = async () => {

        if ((user.status === OwnerCategory.업체등록)) {
            alert('업체를 먼저 등록해주세요')
            nav('/owner')
        }
        if (user.status === OwnerCategory.신청중) {
            alert('현재 심사중입니다.')
            nav('/owner')
        }

        const { data } = await api(`api/v1/acco/me/${user.id}`, 'GET')

        setData(data)


    }

    useEffect(() => {

        navHander()

    }, [])






    return <>
        {data &&
            <div className="owner_room_application">
                <div className="owner_room_info">
                    {data.img && <img src={data.img} />}
                    <div className="owner_room_text">
                        <h2>{data.accoName}</h2>
                        <div style={{ color: 'rgba(0,0,0,0.56)' }} >업종 : {data.sectors}</div>
                        <div style={{ color: 'rgba(0,0,0,0.56)' }}>주소 : {data.address}</div>
                        <div>대표 번호 : {data.ownerPhoneNum}</div>
                        <div>홈페이지 : {data.homePage}</div>
                        {/* 이 정보를 수정가능하게할지는 의문임... 그러면 수정 요청을 하고 또 수정버튼을 누르는 식이 되어야해서. */}
                    </div>

                </div>
            </div>
        }

    </>

}


export default OwnerRoomIndexPage
