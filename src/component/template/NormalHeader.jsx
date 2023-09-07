import { Link } from "react-router-dom"
import './MyHeader.css'


const NormalHeader = () => {




    return <div className="my-header">
        <div className="section" >
            <div className="section-in">
                <Link to='/main' className="logo" >저기어때.</Link>
            </div>

            <div className="section-in">
                <div className="fast-menu" >
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
            <h2 className="more">더보기</h2>
        </div>


    </div>

}

export default NormalHeader