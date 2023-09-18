import { useNavigate, useParams } from "react-router"
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





    return <>
        <div className="owner_room">
            <div className="owner_status">
                <OwnerIndexDetail />
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