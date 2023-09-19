import './SignupFromAuth.css'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { api } from "../../network/api"
import {loginInfoSet} from "../main/ducks/loginCheck";
import {useNavigate} from "react-router-dom";
import {roleSignup} from "../../network/api/apiPostService";
import { useDispatch } from 'react-redux';
import { setUserdux } from '../../feature/userSlice';


const SignupFromAuth = () => {


    const data = localStorage.getItem('token')

    const decodedToken = jwtDecode(data)


    const nav = useNavigate()



    const [user, setUser] = useState({
        id: decodedToken.id,
        email: decodedToken.email,
        username: decodedToken.username,
        role: 'CUSTOMER'

    })
    const dispatch = useDispatch()


    const setUserHandler = (e) => {

        const { name, value } = e.target

        setUser({ ...user, [name]: value })
    }


    const signupHandler = async (e) => {
        e.preventDefault()

        alert("체크")

        try {
            const { data } = await api('api/v1/auth/signup', 'POST', user)

            console.log(data)

            dispatch(setUserdux(data))
            nav('/main')

        } catch (err) {
            alert(err)

        }

    }


    const signupRoleHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await api('/api/v1/auth/signup', "POST", user)
            alert("가입 성공");
        } catch (err) {
            console.log(err);
            alert("가입 실패");

        }
    }



    console.log(decodedToken)



    return <div>
        <div style={{ width: '1024px', margin: '0 auto' }} >
            <div className='signup_box'>

                <div style={{ backgroundColor: '#f44250' }}>여기어때</div>

                <form className='signup_form' onSubmit={(e) => signupHandler(e)}>

                    <div>
                        <div> 이메일</div>
                        <div> {user.email}</div>
                    </div>
                    <div>
                        <div> 이름</div>
                        <div> {user.username}</div>

                    </div>

                    <div>
                        <div> 가입 유형</div>
                        <div>
                            <input
                                type='radio'
                                name='role'
                                value='CUSTOMER'
                                onChange={setUserHandler}
                            />
                            CUSTOMER

                            <input
                                type='radio'
                                name='role'
                                value='OWNER'
                                onChange={setUserHandler}
                            />
                            OWNER
                        </div>
                    </div>
                    <button type='submit'> 가입하기</button>
                </form>
                </div>
            </div>
        </div>
}

export default SignupFromAuth;