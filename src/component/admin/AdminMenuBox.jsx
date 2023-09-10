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
        <Link to="/admin/apply" className={secondSegment === 'apply' ? 'in' : ''}> 영업 승인 </Link>
        <Link to="/admin/room" className={secondSegment === 'room' ? 'in' : ''}> 업주 관리 </Link>
        <Link to="/admin/log" className={secondSegment === 'log' ? 'in' : ''}> 결제 기록 </Link>
        <Link to="/admin/statistics" className={secondSegment === 'statistics' ? 'in' : ''}>통계 </Link>

        {/* 여긴 순수하게 버튼만 냅두자. 사용하는 쪽의 껍데기에서 a태그를 걸쳐서 쓰는 편이 올바라보임*/}


    </>

}

export default AdminMenuBox