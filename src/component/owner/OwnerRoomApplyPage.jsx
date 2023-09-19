import { useSelector } from "react-redux"
import { api, apiNoToken } from "../../network/api"
import { useNavigate } from "react-router"

const OwnerRoomApplyPage = () => {

    const { room } = useSelector((state) => state.ownerRoom)

    const nav = useNavigate()

    const applyRoom = async () => {
        console.log('테스트')

        if (isEmpty()) {
            alert('빈 공간을 채워줘')
        }

        try {
            const { data } = await apiNoToken('api/v1/room/apply', 'POST', room)

            alert('신청 완료. 관리자의 승인을 기다리십시오.')

            nav('/owner')

        } catch (err) {
            alert(err)
        }


    }

    const isEmpty = () => {

        if (room.length) {
            for (const obj of room) {
                //각각의 속성을 확인해야함..
            }

            return false
        }
    }


    return <>

        <button onClick={() => applyRoom()}>신청하기</button>

        <span>관리자의 승인이 필요합니다</span>

    </>


}

export default OwnerRoomApplyPage