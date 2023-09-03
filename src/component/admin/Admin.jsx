import { useEffect, useState } from "react"
import { Category } from "./Category"
import { useDispatch } from "react-redux"
import { setPage } from "../../feature/adminPageSlice"
import AdminPage from "./AdminPage"
import './Admin.css'

const Admin = () => {

    const dispatch = useDispatch()

    const [stickyTop, setStickyTop] = useState(0);

    console.log("테스트")

    useEffect(() => {
        const handleScroll = () => {
            setStickyTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    // 아마 헤더는 자동으로 등록이 되지만, 내부적으로 사용할 사이드 바를 구현해야하고,
    //  그 속의 데이터를 갈아치우는 형태로 어드민 컴포넌트들을 만들어야할듯하다.

    // 일단 사이드 바 부터 구현하고, 내부적으로 컴포넌트를 갈아치우는 형태를 사용해보도록하자.
    //  그렇게 하기위해선 스테이트를 통해 현재 보여주고 있는 페이지를 명시적으로 나타낼 필요가 있다.
    // 대신 기본 디폴트 값을 주어야할듯..


    //내가 사용할 페이지를 카테고리화 하여서, 어떤 페이지를 보여줄지 결정하고 싶음.
    // const [category, setCategory] = useState(Category.신청페이지)

    console.log("몇번 불리고 있는지 체크하는 친구 from Admin")


    const onClickHandler = (data) => {

        dispatch(setPage(data))
    }

    return (
        <>
            {/* 이거 뭔가 격하게 반복작업임 .. 충분히 list 돌릴 수 있을 듯. 
                대충 카테고리 델꼬와서 맵으로 버튼 생산 하면 됨. 그 밑도 대충 동일함 내 예상으로는.
            */}

            {/* 근데 useState로 여길 인쇄하는게 좀 낭비임. 왜냐면 버튼까지 같이 갱신됨 -> 이럴필요는 없음 내생각엔
                아니면 내가 어떤 곳을 누르고 있는지 띄우려면 버튼에 색깔을 넣어줄 수 있지만, 그렇게 되어있는 사이트는 없음.

                이럴때는 여기에서 리덕스 값을 세팅하고, 컴포넌트를 하나 더 들어가서 그 속에서 관리하면 됨.
            */}
            <div className="main-box">

                <div className="_left-box">
                    <div className="_button-list" style={{ marginTop: stickyTop + 'px' }}>
                        {Object.keys(Category).map((menu) => {
                            return <p className="_button" key={menu} onClick={() => onClickHandler(menu)}> {menu} </p>
                        })}
                    </div>
                </div>

                <div className="_right-box">
                    <div className="_right-list">
                        <AdminPage ></AdminPage>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Admin