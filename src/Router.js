import App from "./App";
import {createBrowserRouter} from "react-router-dom";
import Signup from "./components/authLogin/Signup";
import Reservation from "./components/Page/layout/Reservation";
import MyInfo from "./components/Page/layout/MyInfo";
import Info from "./components/Page/layout/Info";
import FindPw from "./components/Page/information/FindPw";
import RoomInfo from "./components/Page/layout/roomInfo";
import MainLogin from "./components/mainLogin/MainLogin";
import Login from "./components/authLogin/Login";
import Main from "./components/Page/information/Main";
import Footer from "./components/Page/layout/Footer";

const router = createBrowserRouter([

    {
        path : '/',
        element : <App />
    },
    {
        path : '/signup',
        element : <Signup/>
    },
    {
        path : '/amenity',
        element : <Reservation />
    },
    {
        path: '/myInfo',
        element : <MyInfo />
    },
    {
        path:'/info',
        element : <Info />
    },
    {
        path: '/findPw',
        element: <FindPw/>
    },
    {
        path: '/roomInfo',
        element: <RoomInfo/>
    },
    {
        path: '/mainLogin',
        element: <MainLogin/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/main',
        element: <Main/>
    },
    {
        path: '/footer',
        element: <Footer/>
    }
]);

export default router;