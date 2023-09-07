import { useState } from "react";

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
                        <a className="logo" style={{ color: 'red', textAlign: "center" }}>저기어때.</a>
                    </div>

                </div>


                <div>

                    <button onClick={toggleMenu}>
                        <img src="image.goodchoice.kr/images/web_v3/ico_menu.png"></img>
                    </button>
                    <div style={{ overflow: 'hidden' }}>
                        {menuOpen &&

                            <div className="open">
                                <ul>
                                    <li>메뉴 항목 1</li>
                                    <li>메뉴 항목 2</li>
                                    <li>메뉴 항목 3</li>
                                </ul>
                            </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    </>

}
export default PhoneHeader