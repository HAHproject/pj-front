import { Route, Routes, BrowserRouter } from "react-router-dom"
import Admin from "../component/admin/Admin"
import Login from "../component/auth/Login"
import Signup from "../component/auth/Signup"
import Main from "../component/main/Main"
import Template from "../component/template/Template"
import Owner from "../component/owner/Owner"
import ApplyPage from "../component/admin/ApplyPage"
import LogPage from "../component/admin/LogPage"
import RoomPage from "../component/admin/RoomPage"
import StatisticsPage from "../component/admin/StatisticsPage"
import ApplyDetailPage from "../component/admin/ApplyDetailPage"
import OwnerApplyPage from "../component/owner/OwnerApplyPage"
import OwnerRoomPage from "../component/owner/OwnerRoomPage"
import OwnerManagementPage from "../component/owner/OwnerManagementPage"
import OwnerIndex from "../component/owner/OwnerIndex"
import Notice from "../component/notice/Notice"
import EventPage from "../component/notice/EventPage"
import QuesPage from "../component/notice/QuesPage"
import AnnouncementPage from "../component/notice/AnnouncementPage"
import MainSignup from "../component/main/mainLogin/MainSignup";
import MainLogin from "../component/main/mainLogin/MainLogin";
import FindPw from "../component/user/information/FindPw";
import Reservation from "../component/user/information/Reservation";

import MyInfoBox from "../component/user/information/MyInfoBox";
import Info from "../component/user/information/Info";
import MyInfoPage from "../component/user/information/MyInfoPage";
import MyInfoChange from "../component/user/information/MyInfoChange";
import MyPoints from "../component/user/information/MyPoints";
import MyReservationInfo from "../component/user/information/MyReservationInfo";
import PaymentPage from "../component/user/information/PaymentPage";





const MyRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<MainLogin></MainLogin>} />
            <Route path="/signup" element={<MainSignup></MainSignup>} />
            <Route path="/findPw" element={<FindPw></FindPw>} />
            <Route path="/authLogin" element={<Login></Login>}/>
            <Route element={<Template />}>
                {/* 템플릿이 적용될 파츠들.. 여기서 고민이 몇가지 있다. */}


                <Route path="/main" element={<Main />} />
                <Route path="/notice" element={<Notice></Notice>} >
                    <Route path="announcement" element={<AnnouncementPage></AnnouncementPage>} />
                    <Route path="event" element={<EventPage></EventPage>} />
                    <Route path="ques" element={<QuesPage></QuesPage>} />

                </Route>


                <Route path="/admin" element={<Admin></Admin>} >
                    <Route path="apply" element={<ApplyPage></ApplyPage>} />
                    <Route path="apply/:id" element={<ApplyDetailPage />} />
                    {/* 이거 방식이 조금 많이 불편함 .. 이건 고민 좀 한다음 결정해야할 듯 .. 내부적으로 들어가게 하고싶어도 admin 이 아웃렛을 들고있어서 불가능함. */}

                    <Route path="statistics" element={<StatisticsPage></StatisticsPage>} />
                    <Route path="room" element={<RoomPage></RoomPage>} />
                    <Route path="log" element={<LogPage></LogPage>} />
                </Route>


                <Route path="/owner" element={<Owner></Owner>} >
                    <Route index element={<OwnerIndex />} />
                    <Route path="apply" element={<OwnerApplyPage />} />
                    <Route path="room" element={<OwnerRoomPage />} />
                    <Route path="management" element={<OwnerManagementPage />} />
                </Route>
                <Route path ="/amenity" element={<Reservation></Reservation>}>
                </Route>
                <Route path ="/payment" element={<PaymentPage></PaymentPage>}>
                </Route>
                <Route path = "/info" element={<Info></Info>}></Route>
                <Route path = "/myInfo" element={<MyInfoPage></MyInfoPage>}>
                    <Route/>
                    <Route path="update" element={<MyInfoChange />} />
                    <Route path="points" element={<MyPoints />} />
                    <Route path="rInfo" element={<MyReservationInfo />} />
                </Route>
            </Route>



        </Routes>
    </BrowserRouter >

}
export default MyRoutes