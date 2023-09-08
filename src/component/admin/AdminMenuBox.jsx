import { useDispatch } from "react-redux";
import { Category } from "./Category"
import { setPage } from "../../feature/adminPageSlice";
import { Link } from "react-router-dom";


const AdminMenuBox = () => {

    const dispatch = useDispatch()

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


    const onClickHandler = (data) => {

        dispatch(setPage(data))
    }



    return <>
        {/* <div className="_button-list" >
            {Object.keys(Category).map((menu) => {
                return <p className="_button" key={menu} onClick={() => onClickHandler(menu)}> {menu} </p>
            })}
        </div> */}

        <div className="_button-list" >
            <Link to="apply" ><p className="_button" > apply 페이지 </p></Link>
            <Link to="room" ><p className="_button" > room 페이지 </p></Link>
            <Link to="log" ><p className="_button" > log 페이지 </p></Link>
            <Link to="statistics" ><p className="_button" > 통계 페이지 </p></Link>
        </div>


    </>

}

export default AdminMenuBox