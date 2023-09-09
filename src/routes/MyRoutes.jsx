import { Route, Routes, BrowserRouter } from "react-router-dom"
import Admin from "../component/admin/Admin"
import Login from "../component/auth/Login"
import Signup from "../component/auth/Signup"
import Template from "../component/template/Template"
import Owner from "../component/owner/Owner"
import ApplyPage from "../component/admin/ApplyPage"
import LogPage from "../component/admin/LogPage"
import RoomPage from "../component/admin/RoomPage"
import StatisticsPage from "../component/admin/StatisticsPage"
import ApplyDetailPage from "../component/admin/ApplyDetailPage"




const MyRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route element={<Template />}>
                {/* 템플릿이 적용될 파츠들.. 여기서 고민이 몇가지 있다. */}
                <Route path="/admin" element={<Admin></Admin>}>
                    <Route path="apply" element={<ApplyPage></ApplyPage>} />
                    <Route path="apply/:id" element={<ApplyDetailPage />} />
                    {/* 이거 방식이 조금 많이 불편함 .. 이건 고민 좀 한다음 결정해야할 듯 .. 내부적으로 들어가게 하고싶어도 admin 이 아웃렛을 들고있어서 불가능함. */}

                    <Route path="statistics" element={<StatisticsPage></StatisticsPage>} />
                    <Route path="room" element={<RoomPage></RoomPage>} />
                    <Route path="log" element={<LogPage></LogPage>} />
                </Route>
                <Route path="/owner" element={<Owner></Owner>} />

            </Route>

        </Routes>
    </BrowserRouter>

}
export default MyRoutes