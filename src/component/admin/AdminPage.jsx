import { useSelector } from "react-redux"
import { Category } from "./Category"

const AdminPage = () => {


    const {nowPage} = useSelector((state) => state.adminPages)

    return <>
        {nowPage === Category.로그페이지 && <p>1</p>}
        {nowPage === Category.방등록허가페이지 && <p>2</p>}
        {nowPage === Category.신청페이지 && <p>3</p>}
        {nowPage === Category.통계페이지 && <p>4</p>}
    </>
}

export default AdminPage