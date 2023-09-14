import { useNavigate } from "react-router"
import { OwnerCategory } from "./OwnerCategory"
import { man1, man2 } from "./data"
import { useEffect } from "react"
import OwnerIndexDetail from "./OwnerIndexDetail"

import './Owner.css'

import './OwnerRoomPage.css'
import { api } from "../../network/api/api"

const OwnerRoomPage = () => {


    const nav = useNavigate()

    const user = man2

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

    const getData = async () => {

        // const data = await api('서버 주소에서 받아옴')


    }

    useEffect(() => {
        navHander()

        getData()

        // 여기에 api를 쏴서 데이터 갖고오기.
    }, [])








    return <>
        <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
            <div className="owner_status">
                <OwnerIndexDetail user={user} />
            </div>


            <div className="owner_room_application">
                현재 신청한 숙소 정보를 읽어와야함.
                이건 api 를 쏴서 갖고와야하는 정보
            </div>

            <div>
                여기는 방 등록 폼이 와야함.

                리스트로 받아야하고 ... 몇가지 신경 쓸 부분이 있음..

            </div>

        </div>

    </>


}

export default OwnerRoomPage