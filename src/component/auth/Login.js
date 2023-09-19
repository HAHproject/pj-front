import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "../auth/login.module.css"
import logoLink from "../../images/mainLogo.png"
import {loginInfoSet} from "../main/ducks/loginCheck";
import {userLogin} from "../../network/api/apiPostService";

const Login = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginHandler = () => {
        userLogin(username, password)
            .then((res) => {
                nav("main");
                dispatch(loginInfoSet(res.data));
                alert("로그인 성공");
            })
            .catch((err) => {
                console.log(err);
                alert("로그인 실패");
            });
    };

    const forgotPasswordHandler = () => {
        nav("/findPw");
    };

    const signUpHandler = () => {
        nav("/signup");
    };

    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <img src={logoLink} alt="Login" />
            </div>
            <div className={classes["login-content"]}>
                <form>
                    <h2 className={classes.title}>Auth Login</h2>
                    <div className={`${classes["input-div"]} ${classes.one}`}>
                        <div className={classes.i}>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className={classes.div}>
                            <h5>Username</h5>
                            <input
                                type="text"
                                className="input"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={`${classes["input-div"]} ${classes.pass}`}>
                        <div className={classes.i}>
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className={classes.div}>
                            <h5>Password</h5>
                            <input
                                type="password"
                                className="input"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <a href="#" onClick={forgotPasswordHandler}>Forgot Password?</a>
                    <input
                        type="button"
                        className={`${classes.btn} ${classes.submitBtn}`}
                        value="Login"
                        onClick={loginHandler}
                    />
                    <input
                        type="button"
                        className={`${classes.btn} ${classes.submitBtn}`}
                        value="Signup"
                        onClick={signUpHandler}
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
