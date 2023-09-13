import React, { useState } from "react";
import classes from "../../auth/passwordChange.module.css"
import {useNavigate} from "react-router-dom";


const FindPw = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [myId, setMyId] = useState("");
    const [confirmId, setConfirmId] = useState("");
    const nav = useNavigate();


    const idCheckHandler = () => {
        // id check 로직 서버 구현

        if (myId !== "" && myId === confirmId) {
            // 아이디가 있을 때
            alert("아이디가 확인 되었습니다.");
        } else {
            // 일치하지 않을 때의 처리
            alert("가입정보가 없는 아이디 입니다!");
        }
    };

    const handlePasswordChange = () => {
        // 비밀번호 초기화 서버에서 구현
        if (newPassword === confirmPassword) {
            // 새 비밀번호와 확인 비밀번호가 일치할 때의 처리
            alert("비밀번호가 초기화되었습니다.");
        } else {
            // 일치하지 않을 때의 처리
            alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        }
    };

    const updatePwHandler=() => {
        handlePasswordChange()
        nav("/mainLogin")
    }

    return (
        <div className={classes.all}>
        <div className={classes.passwordChangeContainer}>
            <h2 className={classes.title}>비밀번호 재설정</h2>
            <div className={classes.formGroup}>
                <label className={classes.label}>가입 아이디</label>
                <input
                    type="text"
                    className={classes.input}
                    value={myId}
                    onChange={(e) => setMyId(e.target.value)}
                />
            </div>
            <button className={`${classes.greenButton}`} onClick={idCheckHandler}>
                아이디 확인
            </button>

                < ></>
                <div className={classes.formGroup}>
                    <label className={classes.label}>새 비밀번호</label>
                    <input
                        type="password"
                        className={classes.input}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label}>비밀번호 확인</label>
                    <input
                            type="password"
                            className={classes.input}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className={`${classes.greenButton}`} onClick={updatePwHandler}>
                        비밀번호 초기화
                    </button>
            </div>
            </div>
        );
    };

    export default FindPw;
