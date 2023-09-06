import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "../../styles/Login/login.module.css";
import { userSignup } from "../../common/api/apiPostService";
import imgLink from "../../common/img/mainLogo.png";

const Signup = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const nav = useNavigate();
    const [users, setUsers] = useState({
        id: "",
        password: "",
        passwordCheck: "",
        name: "",
    });

    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setUsers({ ...users, [name]: value });
    };

    const onClickHandler = (e) => {
        if (users.password === users.passwordCheck) {
            if (passwordRegex.test(users.password)) {
                try {
                    e.preventDefault();
                    userSignup(users.id, users.password, users.name);
                    nav("/");
                    alert("회원가입 성공");
                } catch (error) {
                    console.log(error.response.data);
                    alert("회원가입 실패");
                    userLoginHandler();
                }
            } else {
                alert("올바른 비밀번호 형식이 아닙니다");
            }
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    };

    const userLoginHandler = () => {
        nav("/");
    };

    const userLoginHandler2 = () => {
        nav("/sendTmpPw");
    };

    const forgotPasswordHandler = () => {
        nav("/findPw");
    };



    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <img src={imgLink} alt="Login" />
            </div>
            <div className={classes["login-content"]}>
                <form>
                    <h2 className={classes.title}>Signup</h2>
                    <div className={`${classes["input-div"]} ${classes.one}`}>
                        <div className={classes.i}>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className={classes.div}>
                            <h5>Username</h5>
                            <input
                                type="text"
                                name="id"
                                className="input"
                                onChange={(e) => setUsers({ ...users, id: e.target.value })} // 수정된 부분: users 객체 업데이트
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
                            />
                        </div>
                    </div>
                    <div className={`${classes["input-div"]} ${classes.one}`}>
                        <div className={classes.i}>
                            <i className="password-check"></i>
                        </div>
                        <div className={classes.div}>
                            <h5>Password Check</h5>
                            <input
                                type="text"
                                name="password"
                                className="input"
                                onChange={(e) => setUsers({ ...users, id: e.target.value })} // 수정된 부분: users 객체 업데이트
                            />

                        </div>
                    </div>

                    <a href="#" onClick={forgotPasswordHandler}>Forgot Password?</a>
                    <input
                        type="button"
                        className={`${classes.btn} ${classes.submitBtn}`}
                        value="Create"
                        onClick={userLoginHandler2}
                    />
                    <input
                        type="button"
                        className={`${classes.btn} ${classes.submitBtn}`}
                        value="Login"
                        onClick={userLoginHandler}
                    />
                </form>
            </div>
        </div>
    );
};

export default Signup;
