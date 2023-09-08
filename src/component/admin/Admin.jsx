
import { useSelector } from "react-redux"

import './Admin.css'
import AdminMenuBox from "./AdminMenuBox"
import { Outlet } from "react-router"

const Admin = () => {


    // 아마 헤더는 자동으로 등록이 되지만, 내부적으로 사용할 사이드 바를 구현해야하고,
    //  그 속의 데이터를 갈아치우는 형태로 어드민 컴포넌트들을 만들어야할듯하다.

    // 일단 사이드 바 부터 구현하고, 내부적으로 컴포넌트를 갈아치우는 형태를 사용해보도록하자.
    //  그렇게 하기위해선 스테이트를 통해 현재 보여주고 있는 페이지를 명시적으로 나타낼 필요가 있다.
    // 대신 기본 디폴트 값을 주어야할듯..


    //내가 사용할 페이지를 카테고리화 하여서, 어떤 페이지를 보여줄지 결정하고 싶음.
    // const [category, setCategory] = useState(Category.신청페이지)

    const { isSmallScreen } = useSelector((state) => state.widthSizes)

    return (
        <>


            {/* 근데 useState로 여길 인쇄하는게 좀 낭비임. 왜냐면 버튼까지 같이 갱신됨 -> 이럴필요는 없음 내생각엔
                아니면 내가 어떤 곳을 누르고 있는지 띄우려면 버튼에 색깔을 넣어줄 수 있지만, 그렇게 되어있는 사이트는 없음.

                이럴때는 여기에서 리덕스 값을 세팅하고, 컴포넌트를 하나 더 들어가서 그 속에서 관리하면 됨.
            */}


            {/* 
            현재 스크롤을 동적으로 반응하게 하긴했음 ... 근데 이게 심각한 문제가 있어보임.

            페이지를 수십번 재 렌더링 하는거같은데... 이거 맞나 ...??

            그리고 이렇게 할거면.. 저 왼쪽 사이드 바를 더 깊게 끌고가서 거기서 써야함.
            지금 여기서 쓰니깐 어드민 페이지도 1초에 수십번 부르고 있음....
            
            */}
            <div className={isSmallScreen ? 'main-box-phone' : 'main-box'}>
                {!isSmallScreen && <div className="_left-box">
                    <AdminMenuBox />
                </div>}


                <div className="_right-box">
                    <div className="_right-list">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Admin