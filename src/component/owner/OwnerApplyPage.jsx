import OwnerIndexDetail from "./OwnerIndexDetail"
import { man1 } from './data'
import './OwnerApplyPage.css'

import ReactDaumPost from 'react-daumpost-hook'
import { useRef, useState } from "react"

const OwnerApplyPage = () => {

    const user = man1

    const [test, setTest] = useState({ address: '', sido: '', addInfo: '' })

    const ref = useRef(null);

    const postConfig = {
        // 팝업창으로 사용시 ref: userRef()
        onComplete: (data) => {

            setTest({ address: data.address, sido: data.sido })


            console.log(test)

            /* 
                      우편 번호 처리하는 로직
                  */
        },
    };
    const postCode = ReactDaumPost(postConfig);


    const navHandler = () => {


    }



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
                            담당자
                        </span>

                        <div>
                            내용작성
                        </div>

                    </div>


                    <div>
                        <span>
                            담당자
                        </span>

                        <div>
                            내용작성
                        </div>
                    </div>
                    <div>
                        <span>
                            담당자
                        </span>

                        <div>
                            내용작성
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
                            호스트 <br />
                            홈페이지<br />
                            선택사항
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
                    </div>
                </div>

            </div>

        </div>



    </>


}

export default OwnerApplyPage