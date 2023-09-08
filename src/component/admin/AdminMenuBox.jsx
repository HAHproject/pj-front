// import { useDispatch } from "react-redux";
// import { setPage } from "../../feature/adminPageSlice";

import { Link } from "react-router-dom";
import '../admin/AdminMenuBox.css'



const AdminMenuBox = () => {

    // const dispatch = useDispatch()

    // const [stickyTop, setStickyTop] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setStickyTop(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);



    console.log("얘는 랜더링 어느정도까지 허용인가 ? ")


    // const onClickHandler = (data) => {

    //     dispatch(setPage(data))
    // }



    return <>
        {/* <div className="_button-list" >
            {Object.keys(Category).map((menu) => {
                return <p className="_button" key={menu} onClick={() => onClickHandler(menu)}> {menu} </p>
            })}
        </div> */}

        <div className="_button-list" >
            <Link to="/admin/apply" className="_button"> apply 페이지 </Link>
            <Link to="/admin/room" className="_button"> room 페이지 </Link>
            <Link to="/admin/log" className="_button"> log 페이지 </Link>
            <Link to="/admin/statistics" className="_button">통계 페이지 </Link>
        </div>


    </>

}

export default AdminMenuBox