import { Link, useLocation, useNavigate } from "react-router-dom"
import './NormalHeader.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import AdminMenuBox from "../admin/AdminMenuBox";
import OwnerMeneBox from "../owner/OwnerMenuBox";
import NoticeMenuBox from "../notice/NoticeMenuBox";


const NormalHeader = () => {

    const token = localStorage.getItem('token')

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const firstSegment = pathSegments[1];

    const { scroll } = useSelector(state => state.scrolls)
    console.log('헤더 랜더링 테스트')

    const user = useSelector(state => state.user)

    const nav = useNavigate()


    const [adminModal, setAdminModal] = useState(false)
    const [ownerModal, setOwnerModal] = useState(false)
    const [userModal, setUserModal] = useState(false)
    const [noticeModal, setNoticeModal] = useState(false)

    const logout = () => {

        localStorage.clear()
        nav('/main')

    }

    const login = () => {
        nav('/login')

    }



    // const test = () => {
    //     console.log('테스트중입니다')

    //     setTest1(true)
    // }





    return <>

        <div className={`my_header ${scroll ? 'scroll' : ''}`}>
            <div className="section" >
                <div className="section_in">
                    <Link to='/main' className={`logo ${scroll ? 'scroll' : ''}`} >저기어때.</Link>
                </div>

                <div className="section_in">
                    <div className={`fast_menu ${scroll ? 'scroll' : ''}`} >

                        <div onMouseEnter={() => setUserModal(true)} onMouseLeave={() => setUserModal(false)} >
                            <Link to="/myInfo/rInfo" className="header-button">예약 내역</Link>

                        </div>

                        <div onMouseEnter={() => setNoticeModal(true)} onMouseLeave={() => setNoticeModal(false)} >
                            <Link to="/notice" className="header-button">더 보기</Link>
                            <div style={{ position: "absolute" }} >
                                {noticeModal && <div className="sub_menu"><NoticeMenuBox /></div>}
                            </div>

                        </div>



                        {(user && user.role === 'ADMIN') && <div onMouseEnter={() => setAdminModal(true)} onMouseLeave={() => setAdminModal(false)} >
                            <Link to="/admin" className="header-button">어드민 페이지</Link>
                            <div style={{ position: "absolute" }} >
                                {adminModal && <div className="sub_menu"><AdminMenuBox /></div>}
                            </div>

                        </div>}
                        {(token && user.role === 'OWNER') &&
                            <div onMouseEnter={() => setOwnerModal(true)} onMouseLeave={() => setOwnerModal(false)} >
                                <Link to="/owner" className="header-button">오너 페이지</Link>
                                <div style={{ position: "absolute" }} >
                                    {ownerModal && <div className="sub_menu"><OwnerMeneBox /></div>}
                                </div>

                            </div>}

                        {token &&
                            <div  >
                                <span className="logout_button" onClick={() => logout()}>로그아웃</span>

                            </div>
                        }

                        {!token &&
                            <div  >
                                <span className="logout_button" onClick={() => login()}>로그인</span>

                            </div>


                        }

                    </div>
                </div>
            </div>
        </div>


        {firstSegment !== 'main' && <div className="back_ground">
            <div className="section-2">
                {firstSegment === 'admin' && <Link to='/admin'><div className="more"> 관리</div></Link>}
                {firstSegment === 'owner' && <Link to='/owner'><div className="more"> 영업 및 등록</div></Link>}
                {firstSegment === 'reservation' && <div className="more"> 예약 내역</div>}
                {firstSegment === 'notice' && <div className="more"> 더 보기</div>}

            </div>
        </div>}




    </>

}

export default NormalHeader