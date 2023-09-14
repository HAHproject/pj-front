import { useNavigate } from "react-router"
import { OwnerCategory } from "./OwnerCategory"
import { data, man1, man2 } from "./data"
import { useEffect, useState } from "react"
import OwnerIndexDetail from "./OwnerIndexDetail"

import './Owner.css'

import './OwnerRoomPage.css'
import { api } from "../../network/api/api"
import uuid from "react-uuid"
import { async } from "q"

const OwnerRoomPage = () => {

    console.log('랜더링 테스트 at room')

    const sample = data // 업체 정보, 이걸 이제 받아온 상태인것임.

    const nav = useNavigate()

    const user = man2

    const [list, setList] = useState([])

    const addRoomHandler = () => {
        const num = uuid()
        setList([...list, { id: num, flag: false }])
    }

    /**
     * 각자가 함수를 따로 갖아야하는데, 그 함수에서 인덱스를 받아와서
     * 그 인덱스에 맞게 데이터를 만들어서, 던져줘야한다.
     * 
     * 지금 이 전체가 재 랜더링 되고있음 ...
     * 
     * 
     */


    const test2 = () => {

        console.log(list)
    }



    const deleteDataHandler = (id) => {
        setList(list.filter((data) => data.id !== id))

    }

    const dataSet = (e) => {

        const { name, value, id } = e.target

        const result = list.map((data) => data.id === id ? { ...data, [name]: value } : data)
        setList(result)
    }



    const [flag, setFlag] = useState(false)


    const save = (e) => {
        e.preventDefault()
        const { id } = e.target

        const result = list.map((data) => data.id === id ? { ...data, flag: true } : data)
        setList(result)



    }

    const editHandler = (e) => {

        const { id } = e.target

        const result = list.map((data) => data.id === id ? { ...data, flag: false } : data)
        setList(result)

    }

    const [img, setImg] = useState()


    const fileDataSet = async (e) => {

        const selectedFile = e.target.files[0];

        const { name, id } = e.target

        const rId = id.split('/')[1]



        console.log(name)

        if (selectedFile) {
            const reader = new FileReader();

            reader.readAsArrayBuffer(selectedFile);



            reader.onload = (event) => {
                const fileAsArrayBuffer = event.target.result;
                // fileAsArrayBuffer를 서버로 전송할 수 있습니다.
                const file = new Uint8Array(fileAsArrayBuffer);

                const blob = new Blob([file]);

                const url = URL.createObjectURL(blob);

                const result = list.map((data) => data.id === rId ? { ...data, [name]: file, url, imgName: selectedFile.name } : data)
                setList(result)


            };


        }

    }

    const elements = list.map((data) =>
    (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '3px' }} key={data.id}>
            <div style={{ padding: '20px' }} >
                <label htmlFor={`file/${data.id}`}>
                    {data.url ? <img src={data.url} alt="1"></img> : <img src='https://via.placeholder.com/376x226.png/f4f4f4?text=Click+here+to+upload' alt="1"></img>}
                </label>
            </div>

            <div >
                <form id={data.id} onSubmit={(e) => save(e)}>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 5fr', gap: '10px' }}>
                        <span>
                            방정보
                        </span>
                        <div>
                            <input name="roomName" type="text" id={data.id} placeholder="방정보" onBlur={(e) => dataSet(e)} disabled={data.flag} />
                        </div>
                        <span>
                            가격
                        </span>
                        <div>
                            <input name="price" type="number" id={data.id} placeholder="가격" onBlur={(e) => dataSet(e)} disabled={data.flag} />
                        </div>

                        <span>
                            이미지
                        </span>
                        <div>
                            <input type="file" style={{ display: 'none' }} id={`file/${data.id}`} name="file" onChange={(e) => fileDataSet(e)} disabled={data.flag} />
                            <label htmlFor={`file/${data.id}`}>
                                <div className="room_img_item">
                                    <span className="room_btn-upload">업로드</span>
                                    {data.imgName ? <div>{data.imgName}</div> : <div>파일을 올려주세요</div>}
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* <div style={{ margin: '30px 0 0 0' }}>
                        {!data.flag && <button type="submit" > 저장하기</button>}
                        {data.flag && <button id={data.id} onClick={(e) => editHandler(e)}>수정하기</button>}
                    </div> */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0 0 0' }}>
                        {!data.flag && <button type="submit" > 저장하기</button>}
                        {data.flag && <button id={data.id} onClick={(e) => editHandler(e)}>수정하기</button>}
                        <button onClick={() => deleteDataHandler(data.id)}>삭제</button>
                    </div>

                </form>

            </div>




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
        <div style={{ display: "flex", flexDirection: 'column', gap: '14px' }}>
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

            {elements}
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ margin: '0 0 0 20px' }}>✔️ 반드시 저장하지 않아도 됩니다.</div>
                <button onClick={() => addRoomHandler()}> 방 추가하기</button>
            </div>
            <button onClick={() => test2()}>test 2</button>
            {/* 유즈 스테이트에 0:{객체} 1:{객체} 이런식으로 저장하고 싶음 [data...[index]:객체] */}



        </div>

    </>


}

export default OwnerRoomPage