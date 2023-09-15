import { data } from "./data"
import './OwnerRoomIndexPage.css'

const OwnerRoomIndexPage = () => {

    const owner = data


    //  여기서 api 쏴서 기본 데이터를 받아와야함.

    const getData = async () => {

        // const data = await api('서버 주소에서 받아옴')


    }






    return <>

        <div className="owner_room_application">
            <div className="owner_room_info">
                <img src={owner.img} />
                <div className="owner_room_text">
                    <h2>{owner.name}</h2>
                    <div style={{ color: 'rgba(0,0,0,0.56)' }} >업종 : {owner.Sectors}</div>
                    <div style={{ color: 'rgba(0,0,0,0.56)' }}>주소 : {owner.address}</div>

                    <div>대표 : 이름 와야함</div>
                    <div>대표 번호 : {owner.number}</div>
                    <div>홈페이지 : {owner.homePage}</div>
                    {/* 이 정보를 수정가능하게할지는 의문임... 그러면 수정 요청을 하고 또 수정버튼을 누르는 식이 되어야해서. */}
                </div>

            </div>
        </div>

    </>

}


export default OwnerRoomIndexPage
