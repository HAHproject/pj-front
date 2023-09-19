import { useLocation, useNavigate, useParams } from "react-router"
import OwnerApplyPage from "../owner/OwnerApplyPage"
import { api, apiNoToken } from "../../network/api"
import { useEffect, useState } from "react"

import './../owner/OwnerApplyPage.css'

const ApplyDetailPage = () => {


    const nav = useNavigate()
    const { id } = useParams()


    const [data, setData] = useState()

    const getData = async () => {
        console.log("durl")

        try {

            const { data } = await apiNoToken(`api/v1/acco/apply/${id}`, 'GET')

            setData(data)
        } catch (err) {
            alert(err)
        }
    }



    useEffect(() => {

        getData()

    }, [])

    // 여기선 신청서를 보고 인쇄해주는 과정이 있어야한다.
    // 그게 useEffect 에 들어가야하고

    // 그 다음 승인버튼을 누르면
    // 상대방의 상태를 들고 있는 상태로(보통은 토큰)
    // 룸 서버로 간다.
    // 룸 서버에서 상대 토큰이 이번이 완전 처음 업장을 등록하는 상황이라면,
    // 오너 서버로 가서 오너의 상태도 업데이트 해줘야한다.
    // 그게 아니라면 업데이트 할 필요는 없다. 바로 등록만 해줘도된다.
    // 관련해서는 어떻게 표시해줄지 고민이 필요하다.

    const navHandler = async (e) => {
        e.preventDefault()

        /// 여기서 이제 api를 쏴주면 끝난다.

        try {

            const data = await apiNoToken(`/api/v1/acco/apply/${id}`, 'PATCH')

            nav('/admin/apply')

        } catch (err) {
            alert(err)
        }

    }




    return <>
        {data &&
            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }}>

                <form className="owner_application" onSubmit={(e) => navHandler(e)}>
                    <section>
                        <div >
                            <span>
                                호스트 정보
                            </span>

                            <div>
                                <div>
                                    <div>
                                        고유번호
                                    </div>
                                    <div>
                                        {data.ownerId}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        휴대폰 번호
                                    </div>
                                    <div>
                                        {data.ownerPhoneNum}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        대표 번호
                                    </div>
                                    <div>
                                        {data.accoPhoneNum}
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
                                        {data.accoName}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        업종
                                    </div>

                                    <div className="owner_sectors_radio">
                                        {data.sectors}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        업체 주소
                                    </div>
                                    <div>
                                        {data.address}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        나머지 주소
                                    </div>
                                    <div>
                                        {data.addressDetail}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <span>
                                업장 사진
                            </span>

                            <div>

                                {data.img && <img style={{ width: '370px', height: '226px' }} src={data.img} alt="테스트"></img>}

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
                                        {data.homePage && data.homePage}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="apply_btn_section">

                        <button className="apply_btn" type="submit" >

                            승인하기 <br />


                            {/* 여기선 필수 사항을 입력 안했을 시에, 입력하라고 해야함. 
                        그냥 alert 띄우기로 함...
                        */}
                        </button>
                    </div>

                </form>

            </div>
        }


    </>

}

export default ApplyDetailPage