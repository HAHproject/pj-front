import { useState } from "react";
import AdminMenuBox from "../admin/AdminMenuBox";
import { Link } from "react-router-dom";
import list from '../../justify.svg'
import './PhoneHeader.css'

const PhoneHeader = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };


    return <>
        <div className="my-header-phone">
            <div className="section-phone">
                <div className="section-in">
                    <div>
                        <Link to='/main' className="logo_phone">저기어때.</Link>
                    </div>

                </div>


                <div style={{ paddingTop: 10 }}>

                    <button onClick={toggleMenu}>
                        <img alt="몰라" src={list}></img>
                    </button>
                    <div style={{ overflow: 'hidden' }}>
                        {menuOpen &&
                            <div style={{ position: 'absolute', zIndex: 100, backgroundColor: 'white', right: 250 }} onClick={() => setMenuOpen(!menuOpen)}>
                                <AdminMenuBox />
                                {/* 위에 박스는 다시 만들어야함 ..  */}
                            </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    </>

}
export default PhoneHeader