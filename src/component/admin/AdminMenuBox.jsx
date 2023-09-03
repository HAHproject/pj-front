import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Category } from "./Category"
import { setPage } from "../../feature/adminPageSlice";


const AdminMenuBox = () => {

    const dispatch = useDispatch()

    const [stickyTop, setStickyTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setStickyTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    console.log("얘는 랜더링 어느정도까지 허용인가 ?  1초에 100번 랜더링하는데? ")


    const onClickHandler = (data) => {

        dispatch(setPage(data))
    }



    return <>
        <div className="_button-list" style={{ marginTop: stickyTop + 'px' }}>
            {Object.keys(Category).map((menu) => {
                return <p className="_button" key={menu} onClick={() => onClickHandler(menu)}> {menu} </p>
            })}
        </div>


    </>

}

export default AdminMenuBox