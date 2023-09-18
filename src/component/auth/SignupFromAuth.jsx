import './SignupFromAuth.css'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import { api } from "../../network/api"

const SignupFromAuth = () => {

    const data = localStorage.getItem('token')

    const decodedToken = jwtDecode(data)






    const [user, setUser] = useState({
        id: decodedToken.id,
        email: decodedToken.email,
        username: decodedToken.username,
        role: 'CUSTOMER'


    })



    const setUserHandler = (e) => {

        const { name, value } = e.target

        setUser({ ...user, [name]: value })
    }


    const signupHandler = async (e) => {
        e.preventDefault()

        try {
            const data = await api('api/v1/auth/signup', 'POST', user)


        } catch (err) {

        }


    }



    console.log(decodedToken)



    return <>
        <div style={{ width: '1024px', margin: '0 auto' }} >
            <div className='signup_box'>

                <div style={{ backgroundColor: '#f44250' }}>여기어때</div>
                <form className='signup_form' onSubmit={() => signupHandler()}>
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
                            <input type='radio' name='role' value='CUSTOMER' onClick={(e) => setUserHandler(e)} />
                            일반

                            <input type='radio' name='role' value='OWNER' onClick={(e) => setUserHandler(e)} />
                            장사
                        </div>

                    </div>
                    <button type='submit'> 가입하기</button>
                </form>





            </div>
        </div>

    </>

}


export default SignupFromAuth