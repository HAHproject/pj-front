import {useNavigate} from "react-router-dom";
import {useState} from "react";
import classes from "../../styles/Login/login.moudle.css"
import {userSignup} from "../../common/api/apiPostService";

const Signup = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const nav = useNavigate();
    const [userId, setUserId] = useState('');
    const [code, setCode] = useState('');
    const [inCode, setIncode] = useState('');
    const [users, setUsers] = useState({
        UserId: "",
        password: "",
        passwordCheck: "",
        name: ""
    });


    const onChangeCode = (e) => {
        setIncode(e.target.value)
    }

    const onChangeHandler = (e) => {
        const {value, name} = e.target
        setUsers({...users, [name]: value})
        setUserId(e.target.value)
    }

    const onClickHandler = (e) =>{
        if (users.password === users.passwordCheck){
                if (passwordRegex.test(users.password)){
                    try {
                        e.preventDefault();
                        userSignup(users.id, users.password, users.name)
                        nav('/')
                        alert("회원가입 성공")
                    }catch (error){
                        console.log(error.response.data)
                    }
                }else {
                    alert("올바른 비밀번호 형식이 아닙니다")
                }

            }else {
            alert("password가 일치하지않는다.")
        }
    }
    const userLoginHandler = () => {
        nav('/');
    }

    const userLoginHandler2 = () => {
        nav('/sendTmpPw');
    }

    return (
        <div className={classes.signupWrap}>
                <div style={{paddingTop : '0'}} className={classes.signUpArea}>
                    <div className={classes.loginAreaWrap}>
                        <div>
                            <div className={classes.signupForm}>
                                <div style={{margin : '0'}} className={classes.loginInnerForm}>
                                    <input onChange={onChangeHandler} name="id" focus={true} placeholder='아이디 입력' type='text' />
                                    <input onChange={onChangeHandler} name="password" placeholder='비밀번호' type='password' />
                                    <input onChange={onChangeHandler} name="passwordCheck" placeholder='비밀번호 확인' type='password' />
                                    <input onChange={onChangeHandler} name="name" placeholder='성함' type='text' />
                                    <button onClick={onClickHandler} width='364px' backColor='#1877f2' value='회원가입' />
                                    <div className={classes.findPassArea}>
                                        <p style={{borderBottom : 'none', marginTop : '5px'}} onClick={userLoginHandler} className={classes.paramOption}>이미 회원 이신가요?</p>
                                        <p style={{borderBottom : 'none', marginTop : '5px'}}  onClick={userLoginHandler2} className={classes.paramOption}>비밀번호를 잊으셨나요?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Signup;