// import { useDispatch } from "react-redux";
// import { setPage } from "../../feature/adminPageSlice";

import { Link, useLocation } from "react-router-dom";
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

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const secondSegment = pathSegments[2];



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
        <Link to="/order/apply" className={secondSegment === 'apply' ? 'in' : ''}> 영업 승인 </Link>
        <Link to="/order/room" className={secondSegment === 'room' ? 'in' : ''}> 업주 관리 </Link>
        <Link to="/order/log" className={secondSegment === 'log' ? 'in' : ''}> 결제 기록 </Link>
        <Link to="/order/statistics" className={secondSegment === 'statistics' ? 'in' : ''}>통계 </Link>

        {/* 여긴 순수하게 버튼만 냅두고 쓰는 쪽에서 하위 a태그를 활용해서 쓰는 것이 좋아보임.*/}


    </>

}

export default AdminMenuBox