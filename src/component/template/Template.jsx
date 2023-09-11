import { Outlet } from "react-router"
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"

const Template = () => {



    return <div >
        {/*  마이헤더 */}
        <MyHeader></MyHeader>
        <Outlet></Outlet>
        <MyFooter />
    </div>
}

export default Template