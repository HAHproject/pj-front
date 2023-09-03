import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "../../../common/api/apiUpdateService";

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
            <h1 className="table-title">My Info</h1>
            <table>
                <thead>
                <tr>
                    <th>유저이름</th>
                    <th>새로운 비밀번호</th>
                </tr>
                </thead>
                <tbody>
                <tr key={loginInfo.userId}>
                    <td>
                        <input
                            type="text"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={handleUpdateInfo}>정보 수정</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyInfoChange;
