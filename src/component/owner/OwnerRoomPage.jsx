import { useNavigate } from "react-router"
import { OwnerCategory } from "./OwnerCategory"
import { data, man1, man2 } from "./data"
import { useEffect, useState } from "react"
import OwnerIndexDetail from "./OwnerIndexDetail"

import './Owner.css'

import './OwnerRoomPage.css'
import { api } from "../../network/api/api"
import uuid from "react-uuid"

const OwnerRoomPage = () => {

    const sample = data // 업체 정보, 이걸 이제 받아온 상태인것임.


    const nav = useNavigate()

    const user = man2


    const [list, setList] = useState([])

    const test10 = () => {
        const num = uuid()
        setList([...list, { id: num }])
    }



    const test = { id: '1', roomName: '1' }

    const [data1, setData1] = useState([])
    /**
     * 각자가 함수를 따로 갖아야하는데, 그 함수에서 인덱스를 받아와서
     * 그 인덱스에 맞게 데이터를 만들어서, 던져줘야한다.
     * 
     * 
     */








    const test1 = (data) => {


        setData1([...data1, data])
    }

    const test2 = () => {

        console.log(list)
    }

    const test3 = () => {


    }

    const test4 = (id) => {
        setList(list.filter((data) => data.id !== id))

    }


    const [test100, setTest100] = useState({ id: '', num: '' })
    // 객체 만들기.


    const dataSet = (e) => {
        const { name, value, id } = e.target

        const result = list.map((data) => data.id === id ? { ...data, [name]: value } : data)
        setList(result)
    }


    const test13 = (e) => {
        e.preventDefault()
        // setData1([...data1, test100])


    }

    const elements = list.map((data) =>
    (
        <div style={{ display: 'flex', flexDirection: 'column' }} key={data.id}>

            <form onSubmit={(e) => test13(e)}>
                <input name="test2" id={data.id} placeholder="방정보" onBlur={(e) => dataSet(e)}>
                </input>
                <input name="test" id={data.id} placeholder="테스트" onBlur={(e) => dataSet(e)}>
                </input>

                <input type="file" >

                </input>
                <button type="submit" > 제출버튼입니다.</button>
            </form>
            <div>
                {data.id}
            </div>

            <button onClick={() => test4(data.id)}>삭제 버튼</button>

        </div>
    ))

    // 필요한 것 -> 업데이트 쿼리 (신청서를 보고 상태를 업데이트 해주어야함)
    //  // 이때는 숙소로 먼저 간다음(유저정보를 담아서)
    // 숙

    // 근데 그 상태 업데이트가 두군데에 이루어져야함...


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
                <div className="owner_room_info">
                    <img src={data.img} />
                    <div className="owner_room_text">
                        <h2>{data.name}</h2>
                        <div style={{ color: 'rgba(0,0,0,0.56)' }} > {data.Sectors}</div>
                        <div style={{ color: 'rgba(0,0,0,0.56)' }}>{data.address}</div>

                        <div>대표 : 이름 와야함</div>
                        <div>대표 번호 : {data.number}</div>
                        <div>홈페이지 : {data.homePage}</div>
                        {/* 이 정보를 수정가능하게할지는 의문임... 그러면 수정 요청을 하고 또 수정버튼을 누르는 식이 되어야해서. */}
                    </div>

                </div>
            </div>

            <button onClick={() => test1()}>test 1</button>

            {elements}

            <button onClick={() => test10()}> 추가하기</button>
            <button onClick={() => test2()}>test 2</button>
            {/* 유즈 스테이트에 0:{객체} 1:{객체} 이런식으로 저장하고 싶음 [data...[index]:객체] */}



        </div>

    </>


}

export default OwnerRoomPage