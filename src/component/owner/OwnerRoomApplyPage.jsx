import { useSelector } from "react-redux"

const OwnerRoomApplyPage = () => {

    const { room } = useSelector((state) => state.ownerRoom)

    const applyRoom = () => {
        console.log('테스트')

        if (isEmpty()) {
            alert('빈 공간을 채워줘')
        }

        //여기서 room에 빈 공간을 체크해줘야함.


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