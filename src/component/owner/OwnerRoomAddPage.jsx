import uuid from 'react-uuid'
import './OwnerRoomAddPage.css'
import { man2 } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setRoom } from '../../feature/ownerRoomSlice'
import { useParams } from 'react-router'
import {useNavigate} from "react-router-dom";

const OwnerRoomAddPage = () => {

    const nav = useNavigate();


    const { accoId } = useParams()
    console.log(accoId)

    const dispatch = useDispatch()

    const { room } = useSelector((state) => state.ownerRoom)


    const addRoomHandler = () => {
        const num = uuid()
        dispatch(setRoom({ accoId, num }))

    }

    // 이 밑에 있는 것을 전부 함수로 넣어야하나 ? 
    // 그건 한버 생각을 해보자. 어짜피 함수가 다르면 ...rg?


    const deleteDataHandler = (id) => {

        const deleteRoom = room.filter((data) => data.id !== id)

        dispatch(setData(deleteRoom))

    }

    const dataSet = (e) => {

        const { name, value, id } = e.target

        const rId = id.split('/')[1]

        const addResultData = room.map((data) => data.id === rId ? { ...data, [name]: value } : data)

        dispatch(setData(addResultData))
    }


    const saveHandler = (e) => {
        e.preventDefault()
        const { id } = e.target
        const rId = id.split('/')[1]

        const saveResultData = room.map((data) => data.id === rId ? { ...data, flag: true } : data)


        console.log(saveResultData)

        dispatch(setData(saveResultData))

    }

    const editHandler = (e) => {

        const { id } = e.target
        const rId = id.split('/')[1]

        const editResultData = room.map((data) => data.id === rId ? { ...data, flag: false } : data)

        dispatch(setData(editResultData))
    }

    const fileDataSet = async (e) => {

        const selectedFile = e.target.files[0];

        const { name, id } = e.target

        const rId = id.split('/')[1]

        if (selectedFile) {
            const reader = new FileReader();

            // reader.readAsArrayBuffer(selectedFile);
            reader.readAsDataURL(selectedFile);


            reader.onload = (event) => {
                const fileAsArrayBuffer = event.target.result;

                const addFileData = room.map((data) => data.id === rId ? { ...data, img: fileAsArrayBuffer, imgName: selectedFile.name, imgType: selectedFile.Type } : data)
                dispatch(setData(addFileData))


            };


        }

    }

    const elements = room.map((data) =>
    (
        <div className='room_box' key={`room/${data.id}`}>
            <div className='room_render_img' >
                <label htmlFor={`file/${data.id}`}>
                    {data.img ? <img src={data.img} alt="1"></img> : <img src='https://via.placeholder.com/376x226.png/f4f4f4?text=Click+here+to+upload' alt="1"></img>}
                </label>
            </div>

            <div >
                <form id={`submit/${data.id}`} onSubmit={(e) => saveHandler(e)} >

                    <div className='room_data'>
                        <div>
                            <span>
                                방 이름
                            </span>
                            <div>
                                <input name="roomName" type="text" id={`roomName/${data.id}`} placeholder="방 이름" onBlur={(e) => dataSet(e)} disabled={data.flag} />
                            </div>
                        </div>
                        <div>
                            <span>
                                가격
                            </span>
                            <div>
                                <input name="price" type="number" id={`price/${data.id}`} placeholder="가격" onBlur={(e) => dataSet(e)} disabled={data.flag} />
                            </div>
                        </div>

                        <div>
                            <span>
                                객실 크기
                            </span>

                            <div className='room_size_radio'>

                                <label>
                                    <input
                                        type="radio"
                                        name='roomSize'
                                        value='single'
                                        id={`single/${data.id}`}

                                        onClick={(e) => dataSet(e)}
                                        disabled={data.flag}
                                        defaultChecked
                                    />1인실
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name='roomSize'
                                        value='double'
                                        id={`double/${data.id}`}
                                        onClick={(e) => dataSet(e)}
                                        disabled={data.flag}

                                    />2인실
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name='roomSize'
                                        value='party'
                                        id={`party/${data.id}`}
                                        onClick={(e) => dataSet(e)}
                                        disabled={data.flag}

                                    />파티 룸
                                </label>
                            </div>

                        </div>
                        <div>
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
                    </div>
                    <div className="room_btn_crud">
                        {!data.flag && <button type="submit" > 저장하기</button>}
                        {data.flag && <button id={`edit/${data.id}`} onClick={(e) => editHandler(e)}>수정하기</button>}
                        <button onClick={() => deleteDataHandler(data.id)}>삭제</button>
                    </div>

                </form>
            </div >

        </div >
    ))



    return <>
        {elements}


        {/* {data} */}

        <div className='room_result'>
            <div style={{ margin: '0 0 0 20px' }}>✔️ 반드시 저장하지 않아도 됩니다.</div>
            <button onClick={() => addRoomHandler()}> 방 추가하기</button>
        </div>
    </>

}

export default OwnerRoomAddPage