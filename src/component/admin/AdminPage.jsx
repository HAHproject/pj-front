import { useSelector } from "react-redux"
import { Category } from "./Category"
import LogPage from "./LogPage"
import RoomPage from "./RoomPage"
import ApplyPage from "./ApplyPage"
import StatisticsPage from "./StatisticsPage"

const AdminPage = () => {


    const { nowPage } = useSelector((state) => state.adminPages)

    return <>
        {nowPage === Category.로그페이지 && <LogPage />}
        {nowPage === Category["방등록 허가페이지"] && <RoomPage />}
        {nowPage === Category.신청페이지 && <ApplyPage />}
        {nowPage === Category.통계페이지 && <StatisticsPage />}
    </>
}

export default AdminPage