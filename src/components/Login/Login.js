import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginCheckAction} from "../../ducks/loginCheck";
import {userLogin} from "../../common/api/apiPostService";
import classes from "../../styles/Login/login.moudle.css"

const Login = () => {
    const nav = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const loginHandler = () => {
        userLogin(userId, password)
            .then((res) => {
                nav('main');
                dispatch(loginCheckAction.loginInfoSet(res.data))
                alert("로그인 성공")
            }).catch((err)=>{
                console.log(err)
            alert("로그인 실패")
        })
    }

    const signUpHandler = () => {
        nav('/signup');
    }

    const sendPw = () => {
        nav('/sendTmpPw')
    }

    const userIdHandler = (e) => {
        setUserId(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={classes.loginWrap}>
                <div className={classes.loginArea}>
                    <div className={classes.loginAreaWrap}>
                        <div>
                            <div className={classes.loginForm}>
                                <div className={classes.loginInnerForm}>
                                    <input onChange={userIdHandler} focus={true} placeholder='아이디' type='text' />
                                    <input onChange={passwordHandler} placeholder='비밀번호' type='password' />
                                    <button onClick={loginHandler} width='364px' backColor='#1877f2' value='로그인'>확인</button>
                                    <div className={classes.findPassArea}>
                                        <p className={classes.paramOption} onClick={sendPw}>비밀번호를 잊으셨나요?</p>
                                    </div>
                                    <div>
                                        <button onClick={signUpHandler} width='250px' backColor='#42b72a' value='새 계정 만들기' >회원가입</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );


}

export default Login;