import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import classes from "../mainLogin/mainLogin.module.css"
import {loginInfoSet} from "../ducks/loginCheck";
import or2Img from "../../../images/or2Img.png";
import {userLogin} from "../../../network/api/apiPostService";
import loginLogoLink from "../../../images/haimg.png"
import orImgLink from "../../../images/orImg.png"



const MainLogin = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginHandler = () => {
        userLogin(username, password)
            .then((res) => {
                nav("/main");
                dispatch(loginInfoSet(res.data));
                alert("로그인 성공");
            })
            .catch((err) => {
                console.log(err);
                alert("로그인 실패");
            });
    };


    const findIdHandler = () => {
        nav("/findPw");
    };

    const findPwHandler = () => {
        nav("/findPw")
    }

    const goToAuthHandler = () => {
        nav("/authlogin")
    }

    return (
        <div className = {classes.backGround}>
            <div className={classes.container}>
            <div className={classes.logo}>
                <img src={loginLogoLink} alt="로고" />
            </div>
            <button  style={{color : 'black'}} className={`${classes.authLogin} ${classes.authLoginSubmit}`}
                     type="button"
                     value="Auth Login"
                     onClick={goToAuthHandler}> Auth Login </button>
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
                        >LOGIN</button>
                    </div>
                </div>
                <div className={classes.box1}>
                    <div className={classes.section1} onClick={findIdHandler}>ID 찾기</div>
                    <div className={classes.section2}>
                        <img src = {or2Img}></img>
                    </div>
                    <div className={classes.section3} onClick={findPwHandler}>PW 재설정</div>
                </div>
            </div>
        </div>
    );

};

export default MainLogin;