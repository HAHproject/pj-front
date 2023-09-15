import { useNavigate } from "react-router"
import { OwnerCategory } from "./OwnerCategory"
import { data, man1, man2 } from "./data"
import { useEffect, useState } from "react"
import OwnerIndexDetail from "./OwnerIndexDetail"

import './Owner.css'

import './OwnerRoomPage.css'
import uuid from "react-uuid"
import OwnerRoomIndexPage from "./OwnerRoomIndexPage"
import OwnerRoomAddPage from "./OwnerRoomAddPage"
import OwnerRoomApplyPage from "./OwnerRoomApplyPage"

const OwnerRoomPage = () => {

    console.log('랜더링 테스트 at room')

    const nav = useNavigate()

    const user = man2
    // 이건 리덕스에 있을 예정



    const navHander = () => {

        if ((user.status === OwnerCategory.업체등록)) {
            alert('업체를 먼저 등록해주세요')
            nav('/owner')
        }
        if (user.status === OwnerCategory.신청중) {
            alert('현재 심사중입니다.')
            nav('/owner')
        }


    }

    useEffect(() => {
        navHander()
        // 여기에 api를 쏴서 데이터 갖고오기.
    }, [])

    return <>
        <div className="owner_room">
            <div className="owner_status">
                <OwnerIndexDetail user={user} />
            </div>

            <OwnerRoomIndexPage />

            <OwnerRoomAddPage />

            <div className="owner_room_apply">

                <OwnerRoomApplyPage />
            </div>

        </div>

    </>


}

export default OwnerRoomPage