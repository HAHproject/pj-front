import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {userLogin} from "../../common/api/apiPostService";
import {loginCheckAction} from "../../ducks/loginCheck";
import classes from "../../styles/mainLogin/mainLogin.module.css"
import loginLogoLink from "../../common/img/haimg.png"
import orImgLink from "../../common/img/orImg.png"
import or2Img from "../../common/img/or2Img.png"


const MainLogin = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginHandler = () => {
        userLogin(username, password)
            .then((res) => {
                nav("/main");
                dispatch(loginCheckAction.loginInfoSet(res.data));
                alert("로그인 성공");
            })
            .catch((err) => {
                console.log(err);
                alert("로그인 실패");
            });
    };


    const signUpHandler = () => {
        nav("/signup");
    };

    const findPwHandler = () => {
        nav("/findPw")
    }

    const goToAuthHandler = () => {
        nav("/login")
    }

    return (
        <div className = {classes.backGround}>
            <div className={classes.container}>
            <div className={classes.logo}>
                <img src={loginLogoLink} alt="로고" />
            </div>
            <button  style={{color : 'black'}} className={classes.authLogin} onClick={goToAuthHandler}> Auth Login </button>
            <div></div>
            <div className={classes.logo}>
                <img src={orImgLink} alt = "또는"/>
            </div>
                <div className={classes.input}>
                    <input
                        style={{border: 'none', fontSize: '17px', color: 'gray', width: '100%'}}
                        placeholder={"ID"}
                    />

                </div>
                <div className={classes.input}>
                    <input
                        style={{border: 'none', fontSize: '17px', color: 'gray', width: '100%'}}
                        placeholder={"PASSWORD"}
                    />
                </div>
                <div>
                    <div className={classes.button}>
                        <button style={{
                            border: 'none',
                            padding: '0',
                            background: 'none',
                            cursor: 'pointer',
                            font: 'inherit',
                            outline: 'inherit'
                        }} onClick={loginHandler}
                        >로그인</button>
                    </div>
                </div>
                <div className={classes.box1}>
                    <div className={classes.section1} onClick={findPwHandler}>비밀번호 재설정</div>
                    <div className={classes.section2}>
                        <img src = {or2Img}></img>
                    </div>
                    <div className={classes.section3} onClick={signUpHandler}>회원가입</div>
                </div>
            </div>
        </div>
    );

};

export default MainLogin;