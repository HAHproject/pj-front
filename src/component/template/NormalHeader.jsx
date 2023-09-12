import { Link, useLocation } from "react-router-dom"
import './NormalHeader.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import AdminMenuBox from "../admin/AdminMenuBox";
import OwnerMeneBox from "../owner/OwnerMenuBox";
import NoticeMenuBox from "../notice/NoticeMenuBox";


const NormalHeader = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const firstSegment = pathSegments[1];

    const { scroll } = useSelector(state => state.scrolls)
    console.log('랜더링 테스트')


    const [adminModal, setAdminModal] = useState(false)
    const [ownerModal, setOwnerModal] = useState(false)
    const [userModal, setUserModal] = useState(false)
    const [noticeModal, setNoticeModal] = useState(false)



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

                        <div >
                            <Link to="/admin" className="header-button" >어드민 페이지</Link>
                        </div>

                        <div onMouseEnter={() => setUserModal(true)} onMouseLeave={() => setUserModal(false)} >
                            <Link to="/reservation" className="header-button">예약 내역</Link>

                        </div>

                        <div onMouseEnter={() => setNoticeModal(true)} onMouseLeave={() => setNoticeModal(false)} >
                            <Link to="/notice" className="header-button">더 보기</Link>
                            <div style={{ position: "absolute" }} >
                                {noticeModal && <div className="sub_menu"><NoticeMenuBox /></div>}
                            </div>

                        </div>



                        <div onMouseEnter={() => setAdminModal(true)} onMouseLeave={() => setAdminModal(false)} >
                            <Link to="/admin" className="header-button">어드민 페이지</Link>
                            <div style={{ position: "absolute" }} >
                                {adminModal && <div className="sub_menu"><AdminMenuBox /></div>}
                            </div>

                        </div>

                        <div onMouseEnter={() => setOwnerModal(true)} onMouseLeave={() => setOwnerModal(false)} >
                            <Link to="/owner" className="header-button">오너 페이지</Link>
                            <div style={{ position: "absolute" }} >
                                {ownerModal && <div className="sub_menu"><OwnerMeneBox /></div>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="back_ground">
            <div className="section-2">
                {firstSegment === 'admin' && <h2 className="more"> 관리</h2>}
                {firstSegment === 'owner' && <h2 className="more"> 영업 및 등록</h2>}
                {firstSegment === 'reservation' && <h2 className="more"> 예약 내역</h2>}
                {firstSegment === 'notice' && <h2 className="more"> 더 보기</h2>}
            </div>
        </div>




    </>

}

export default NormalHeader