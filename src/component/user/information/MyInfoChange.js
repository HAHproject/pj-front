import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {updateUserInfo} from "../../../network/api/apiUpdateService";
import {User} from "../../../data/DataList"

const MyInfoChange = () => {
    const loginInfo = useSelector((state) => state.loginCheck.loginInfo);
    const dispatch = useDispatch();

    const [newUserName, setNewUserName] = useState(loginInfo.userName);

    const [newPassword, setNewPassword] = useState("");

    const handleUpdateInfo = () => {
        updateUserInfo(loginInfo.userId, {
            userName: newUserName,
            password: newPassword,
        })
            .then((res) => {
                dispatch({
                    type: "UPDATE_USER_INFO",
                    payload: {
                        userName: newUserName,
                    },
                });
                alert("정보가 업데이트되었습니다.");
            })
            .catch((error) => {
                console.error("정보 업데이트 오류:", error);
                alert("정보 업데이트 중 오류가 발생했습니다.");
            });
    };

    return (
        <div className="table-container">
            <h1 style={{color: "#f7323f"}} className="table-title">내 정보</h1>
            <table>
                <thead>
                <tr>
                    <th style={{textAlign: "center"}}>유저이름</th>
                    <th style={{textAlign: "center"}}>새로운 비밀번호</th>
                </tr>
                </thead>
                <tbody>

                <tr key = {`${User.userId}`}>
                    <td>
                        <input style={{textAlign: "center", width: "100%", border: "0"}}
                            type="text"
                            value={User.name}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input style={{textAlign: "center", width: "100%", border: "0"}}
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </td>
                    <td style={{border: "0"}}>
                        <div style={{cursor:"pointer", backgroundColor:"#f7323f", borderRadius: "4px", textAlign: "center", color: "white", padding: "4px 0"}} onClick={handleUpdateInfo}> 정보 수정 </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyInfoChange;
