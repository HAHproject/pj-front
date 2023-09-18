import { useEffect } from "react"
import { api } from "../../network/api"
import { useLocation, useNavigate } from "react-router"
import { useSearchParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserdux } from "../../feature/userSlice";

const Check = () => {

    const location = useLocation();

    const [searchParams, setSeratchParams] = useSearchParams();
    const detail = searchParams.get('detail');

    const queryParams = new URLSearchParams(location.search);
    // const data = queryParams.get('auth');


    const data = searchParams.get('auth')

    if (data) {
        localStorage.setItem('token', data)
    }

    const nav = useNavigate()


    useEffect(() => {
        checkByEmail()
    }, [])

    const dispatch = useDispatch()



    const checkByEmail = async () => {

        try {
            const { data } = await api("/api/v1/auth/check", 'POST',)


            if (data.token) {
                const map = jwtDecode(data.token)
                dispatch(setUserdux(map))
            }
            if (data) {
                nav(data.urlRedirect
                )
            }



        } catch (err) {

            alert(err)


        }


    }




    return <>

    </>
}

export default Check