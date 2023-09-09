import { Link, useLocation } from "react-router-dom"
import './NormalHeader.css'
import { useSelector } from "react-redux";


const NormalHeader = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const firstSegment = pathSegments[1];

    const { scroll } = useSelector(state => state.scrolls)
    console.log('랜더링 테스트')

    const test = () => {
        console.log('테스트중입니다')
    }





    return <div className="my_header">
        <div className={`section ${scroll ? 'scroll' : ''}`} >
            <div className="section-in">
                <Link to='/main' className={`logo ${scroll ? 'scroll' : ''}`} >저기어때.</Link>
            </div>

            <div className="section-in">
                <div className={`fast_menu ${scroll ? 'scroll' : ''}`} >
                    <div style={{ color: "black" }}>
                        <Link to="/admin" className="header-button" onMouseEnter={() => test()} >어드민 페이지</Link>
                    </div>
                    <div >
                        <Link to="/admin" className="header-button" >어드민 페이지</Link>
                    </div>
                    <div >
                        <Link to="/admin" className="header-button" >어드민 페이지</Link>
                    </div>
                    <div >
                        <Link to="/admin" className="header-button" >어드민 페이지</Link>
                    </div>
                    <div >
                        <Link to="/admin" className="header-button" >어드민 페이지</Link>
                    </div>
                    <div>
                        <Link to="/owner" className="header-button" >오너 페이지</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-2">
            {firstSegment === 'admin' && <h2 className="more"> 관리자 페이지</h2>}
            {firstSegment === 'owner' && <h2 className="more"> 영업 페이지</h2>}
        </div>


    </div>

}

export default NormalHeader