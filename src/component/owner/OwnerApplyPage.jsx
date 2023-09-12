import OwnerIndexDetail from "./OwnerIndexDetail"
import { man1 } from './data'
import './OwnerApplyPage.css'

const OwnerApplyPage = () => {

    const user = man1


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
                                    이름
                                </div>
                                <div>
                                    이름 입력
                                </div>
                            </div>

                            <div>
                                <div>
                                    휴대폰 번호
                                </div>
                                <div>
                                    번호 입력
                                </div>
                            </div>

                            <div>
                                <div>
                                    대표 번호
                                </div>
                                <div>
                                    번호 입력
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
                            담당자
                        </span>

                        <div>
                            내용작성
                        </div>
                    </div>
                    <div>
                        <span>
                            호스트 <br />
                            홈페이지<br />
                            선택사항
                        </span>

                        <div>
                            내용작성
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