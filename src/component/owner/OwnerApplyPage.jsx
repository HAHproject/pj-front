import OwnerIndexDetail from "./OwnerIndexDetail"
import { man1 } from './data'
import './OwnerApplyPage.css'
import './Owner.css'

import ReactDaumPost from 'react-daumpost-hook'
import { useRef, useState } from "react"

const OwnerApplyPage = () => {

    console.log('어플라이 랜더링 테스트, ')

    // 지금 set할때마다 한번에 다 읽어서, 이걸 해결해야한다. (컴포넌트로 분리해서)

    // 그리고 여기 데이터는 완벽하게 재사용할 예정.
    // 재사용 방법 -> 각컴포넌트를 || 걸어서 둘중하나의 데이터를 사용하게 변경,
    // 그리고 특정 페이지에서만 api를 활용하여(이건 로케이션 이용하면 될듯.)
    // 그렇게 하면 이 페이지 전부를 재사용 할 수 있음. -> 어드민에서.
    // 특정 페이지에서는 인풋도 안되게 변경해야하는데.. 이건 고민 좀 해봐야할듯...
    // 다시 만드는게 더 나을 수 있음.

    const user = man1

    const [test, setTest] = useState({ address: '', sido: '', addInfo: '' })

    const ref = useRef(null);

    const postConfig = {
        // 팝업창으로 사용시 ref: userRef()
        onComplete: (data) => {


            setTest({ address: data.address, sido: data.sido })


            /* 
                      우편 번호 처리하는 로직
                  */
        },
    };
    const postCode = ReactDaumPost(postConfig);


    const navHandler = () => {


    }

    const [image, setImage] = useState({ name: '', file: '', thumbnail: '', });

    // 이미지 파일 선택 핸들러
    const handleImageChange = (e) => {

        e.preventDefault()


        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const url = URL.createObjectURL(selectedImage)
            setImage({ name: selectedImage.name, file: selectedImage, thumbnail: url });



        } else {
            console.log('여기로 오나 ?')
            setImage({ name: image.name, file: image.file, thumbnail: image.thumbnail })
        }


    };




    /// 고민이 있다면,


    return <>
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }}>
            <div className="owner_status">
                <OwnerIndexDetail user={user} />


            </div>

            <div className="owner_application">
                {/* 문제는 이러면 구조적으로 너무 불리하다. 차라리 세로로 쪼개고 그 속에서 같은 그리드를 갖게 하는게 어떤가.
                새로운 결론 도출 -> 하위구조에 대한 통제를 하면 된다. 

                밑에 보기만 해도 읽기 싫어짐..

                이걸 보기 좋게 꾸밀 수 있는 방법이 없나?

                컬럼별로 하나의 폴더에 구분해두면 좋긴할텐데

                여기를 다 뜯어서 보관할지 고민중


                */}
                <section>
                    <div>
                        <span>
                            호스트 정보
                        </span>

                        <div>
                            <div>
                                <div>
                                    이메일
                                </div>
                                <div>
                                    이메일 받아올 예정
                                </div>
                            </div>

                            <div>
                                <div>
                                    휴대폰 번호
                                </div>
                                <div>
                                    <input placeholder="핸드폰 번호" className="input_phone_data">

                                    </input>
                                </div>
                            </div>

                            <div>
                                <div>
                                    대표 번호
                                </div>
                                <div>
                                    <input placeholder="대표 전화번호" className="input_phone_data">

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
                                    <input type='text' placeholder='사업자 등록증상 상호명' style={{ width: '260px' }} />
                                </div>
                            </div>

                            <div>
                                <div>
                                    업종
                                </div>

                                <div>
                                    체크박스 시리즈
                                </div>
                            </div>

                            <div>
                                <div>
                                    업체 주소
                                </div>
                                <div>
                                    <input type='text' style={{ caretColor: 'transparent', width: '260px' }} onClick={postCode} placeholder={`${test.address}`} />
                                </div>
                            </div>

                            <div>
                                <div>
                                    추가 정보
                                </div>
                                <div>
                                    <input type='text' style={{ width: '260px' }} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <span>
                            업장 사진
                        </span>

                        <div>

                            {/* 삭제 버튼 만들어야함. <- 생각보다 중요함..
                            
                            그리고 신청서와 같은 경우는 리덕스로 관리하는게 나을 수 있음.

                            보내고 초기화하는 식으로? 이유 -> 한 파일에 코드가 너무 많음.
                            각 파트별로 코드를 나눠서 관리하는게 나을 수도....

                            코드 나누기 + css 최적화 하기 -> 주말 과제
                            */}

                            <label htmlFor='file' style={{ display: 'flex' }}>
                                {image.file ? <img src={image.thumbnail} alt="테스트"></img> : <img src="https://via.placeholder.com/376x226.png/f4f4f4?text=Click+here+to+upload" alt="몰라" />}
                            </label>
                            <input type="file" name='file' id="file" onChange={handleImageChange} style={{ display: 'none' }} />
                            <label htmlFor="file" style={{ margin: '9px 0 0 0' }}>
                                <div className="img_item">
                                    <div className="btn-upload">파일 업로드하기</div>
                                    {image.file ? <div>{image.name}</div> : <div>파일을 올려주세요</div>}
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
                                    <input placeholder="홈페이지 주소" className="input_phone_data">

                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="apply_btn_section">

                    <div className="apply_btn" onClick={() => navHandler()}>

                        신청하기 <br />
                        <span style={{ fontSize: '8px' }}>(관리자의 승인이 필요합니다)</span>


                        {/* 여기선 필수 사항을 입력 안했을 시에, 입력하라고 해야함. */}
                    </div>
                </div>

            </div>

        </div>



    </>


}

export default OwnerApplyPage