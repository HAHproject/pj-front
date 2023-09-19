import OwnerIndexDetail from "./OwnerIndexDetail"
import { man1 } from './data'
import './OwnerApplyPage.css'
import './Owner.css'
import ReactDaumPost from 'react-daumpost-hook'
import { useState } from "react"
import {apiClient} from "../../network/api/apiClient";

import { Await, useNavigate } from "react-router"
import {api, apiNoToken } from "../../network/api"
import { useDispatch, useSelector } from "react-redux"
import {setUserStatus} from "../../feature/userSlice";
import {OwnerCategory} from "./OwnerCategory";



const OwnerApplyPage = () => {

    console.log('어플라이 랜더링 테스트, ')

    const dispatch = useDispatch()


    const nav = useNavigate()

    // 지금 set할때마다 한번에 다 읽어서, 이걸 해결해야한다. (컴포넌트로 분리해서)

    // 그리고 여기 데이터는 완벽하게 재사용할 예정.
    // 재사용 방법 -> 각컴포넌트를 || 걸어서 둘중하나의 데이터를 사용하게 변경,
    // 그리고 특정 페이지에서만 api를 활용하여(이건 로케이션 이용하면 될듯.)
    // 그렇게 하면 이 페이지 전부를 재사용 할 수 있음. -> 어드민에서.
    // 특정 페이지에서는 인풋도 안되게 변경해야하는데.. 이건 고민 좀 해봐야할듯...
    // 다시 만드는게 더 나을 수 있음.

    const user = useSelector(state => state.user)

    const [application, setApplication] = useState({
        ownerId: user.id,
        ownerEmail: user.email,
        ownerName: user.username,
        sectors: 'motel',
        ownerPhoneNum: '',
        accoName: '',
        accoPhoneNum: '',
        address: '',
        sido: '',
        addressDetail: '',
        homePage: '',
        img: '',
        imgName: '',
        status: '미승인'


    })

    console.log(user.id)


    const dataSet = (e) => {

        const { name, value } = e.target

        setApplication({ ...application, [name]: value })

    }

    const postConfig = {
        onComplete: (data) => {
            setApplication({ ...application, address: data.address, sido: data.sido })
        },
    };
    const postCode = ReactDaumPost(postConfig);


    const navHandler = async (e) => {
        e.preventDefault()


        const { address, addressDetail, imgName, ownerPhoneNum, accoPhoneNum, accoName } = application

        if (!address || !addressDetail || !imgName || !ownerPhoneNum || !accoPhoneNum || !accoName) {


            return alert('정보를 모두 입력하여 주십시오')
            // 이건 나중에 따로 관리할 방법을 찾아보자.
            // 전체를 form으로 감싸서 필요성 체크를해줘도 된다.
        }


        /// 여기서 이제 api를 쏴주면 끝난다.
        try {
            const data = await apiNoToken('/api/v1/acco/apply', 'POST', application)

            dispatch(setUserStatus(OwnerCategory.신청중))


            nav('/owner')
        } catch (err) {
            alert(err)
        }


    }

    // 이미지 파일 선택 핸들러
    const handleImageChange = (e) => {

        e.preventDefault()

        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const reader = new FileReader();

            reader.readAsDataURL(selectedImage);

            console.log(selectedImage)

            reader.onload = (event) => {
                const fileAsBase64 = event.target.result;

                setApplication({ ...application, imgName: selectedImage.name, img: fileAsBase64, imgType: selectedImage.type });
            };


        }


    };

    const setValidity = (e, mes) => {

        e.target.setCustomValidity(mes)

    }


    /// 고민이 있다면,


    return <>
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }}>
            <div className="owner_status">
                <OwnerIndexDetail />
            </div>

            <form className="owner_application" onSubmit={(e) => navHandler(e)}>
                <section>
                    <div >
                        <span>
                            호스트 정보
                        </span>

                        <div>
                            <div>
                                <div>
                                    이메일
                                </div>
                                <div>
                                    {application.ownerEmail}
                                </div>
                            </div>

                            <div>
                                <div>
                                    휴대폰 번호
                                </div>
                                <div>
                                    <input

                                        placeholder="핸드폰 번호"
                                        name="ownerPhoneNum"
                                        className="input_phone_data"
                                        // pattern="[0-9]{11}"

                                        onInvalid={(e) => setValidity(e, '핸드폰 번호를 입력해주세요')}
                                        required
                                        onBlur={(e) => dataSet(e)}>
                                        {/* 여기를 제대로 하려면 각각을 원자화 한다음 거기서 onchange를 하고, 최종 값을 onblur로 다시 검증가능하다. */}

                                    </input>
                                </div>
                            </div>

                            <div>
                                <div>
                                    대표 번호
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        placeholder="대표 전화번호"
                                        className="input_phone_data"
                                        name="accoPhoneNum"

                                        // pattern="[0-9]{11}"

                                        onInvalid={(e) => setValidity(e, '핸드폰 번호를 입력해주세요')}
                                        required
                                        onBlur={(e) => dataSet(e)}

                                    >


                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>
                            사업자 등록 정보
                        </span>

                        <div>

                            <div>
                                <div>
                                    상호명
                                </div>

                                <div>
                                    <input
                                        type='text'
                                        placeholder='사업자 등록증상 상호명'
                                        style={{ width: '260px' }}
                                        name="accoName"


                                        onInvalid={(e) => setValidity(e, '상호명을 입력해주세요')}
                                        required

                                        onBlur={(e) => dataSet(e)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    업종
                                </div>

                                <div className="owner_sectors_radio">
                                    <label>
                                        <input
                                            type="radio"
                                            name='sectors'
                                            value='motel'
                                            id={`motel/`}
                                            onClick={(e) => dataSet(e)}
                                            defaultChecked

                                        />모텔
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name='sectors'
                                            value='hotel'
                                            id={`hotel/`}
                                            onBlur={(e) => dataSet(e)}


                                        />호텔
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name='sectors'
                                            value='pension'
                                            id={`pension/`}
                                            onBlur={(e) => dataSet(e)}

                                        />펜션
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name='sectors'
                                            value='guestHouse'
                                            id={`guestHouse/`}
                                            onBlur={(e) => dataSet(e)}

                                        />게스트 하우스
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name='sectors'
                                            value='camping'
                                            id={`camping/`}
                                            onBlur={(e) => dataSet(e)}

                                        />캠핑
                                    </label>
                                </div>
                            </div>

                            <div>
                                <div>
                                    업체 주소
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        style={{ caretColor: 'transparent', width: '260px' }}
                                        onClick={postCode}
                                        placeholder={`${application.address}`}



                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    추가 정보
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        style={{ width: '260px' }}
                                        name="addressDetail"
                                        onBlur={(e) => dataSet(e)}

                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <span>
                            업장 사진
                        </span>

                        <div>

                            <label htmlFor='file' style={{ display: 'flex' }}>
                                {application.img ? <img src={application.img} alt="테스트"></img> : <img src="https://via.placeholder.com/376x226.png/f4f4f4?text=Click+here+to+upload" alt="몰라" />}
                            </label>
                            <input
                                type="file"
                                name='file'
                                id="file"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}

                            />
                            <label htmlFor="file" style={{ margin: '9px 0 0 0' }}>
                                <div className="img_item">
                                    <div className="btn-upload">파일 업로드하기</div>
                                    {application.img ? <div>{application.imgName}</div> : <div>파일을 올려주세요</div>}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <span>
                            호스트 <br />
                            홈페이지<br />
                            (선택사항)
                        </span>

                        <div>
                            <div>
                                <div>
                                    홈페이지
                                </div>
                                <div>
                                    <input placeholder="홈페이지 주소" name="homePage" className="input_phone_data" onBlur={(e) => dataSet(e)}>

                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="apply_btn_section">

                    <button className="apply_btn" type="submit" >

                        신청하기 <br />
                        <span style={{ fontSize: '8px' }}>(관리자의 승인이 필요합니다)</span>


                        {/* 여기선 필수 사항을 입력 안했을 시에, 입력하라고 해야함.
                        그냥 alert 띄우기로 함...
                        */}
                    </button>
                </div>

            </form>

        </div>

    </>


}

export default OwnerApplyPage;