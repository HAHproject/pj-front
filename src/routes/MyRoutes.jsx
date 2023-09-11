import { Route, Routes, BrowserRouter } from "react-router-dom"
import Admin from "../component/admin/Admin"
import Login from "../component/auth/Login"
import Signup from "../component/auth/Signup"
import Main from "../component/main/MainNavIcon"
import Template from "../component/template/Template"




const MyRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route element={<Template />}>
                {/* 템플릿이 적용될 파츠들.. 여기서 고민이 몇가지 있다. */}
                <Route path="/admin" element={<Admin></Admin>} />

            </Route>

        </Routes>
    </BrowserRouter>

}
export default MyRoutes