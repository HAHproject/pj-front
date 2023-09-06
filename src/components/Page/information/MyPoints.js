import React from "react";
import {useSelector} from "react-redux";

const MyPoints = () => {
    const loginInfo = useSelector((state) => state.loginCheck.loginInfo);


    return (
        <div className="table-container">
            <h1 className="table-title">My Points</h1>
            <table>
                <thead>
                <tr>
                    <th>유저이름</th>
                    <th>포인트</th>
                </tr>
                </thead>
                <tbody>
                <tr key={loginInfo.userId}>
                    <td>
                        <p
                            type="text" readOnly={true}
                            value={loginInfo.userName}
                        />
                    </td>
                    <td>
                        <input
                            type="text" readOnly={true}
                            value={loginInfo.userPoint}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>)
}


export default MyPoints;