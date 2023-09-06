import App from "./App";
import {createBrowserRouter} from "react-router-dom";
import Signup from "./components/Login/Signup";
import Reservation from "./components/Page/layout/Reservation";
import MyInfo from "./components/Page/layout/MyInfo";
import Info from "./components/Page/layout/Info";
import FindPw from "./components/Page/information/FindPw";

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
    }
]);

export default router;