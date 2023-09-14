import React from "react";
import {useSelector} from "react-redux";
import {User} from "../../../data/DataList";

const MyPoints = () => {
    const loginInfo = useSelector((state) => state.loginCheck.loginInfo);



    return (
        <div className="table-container">
            <h1 style={{color: "#f7323f"}} className="table-title">내 포인트</h1>
            <table>
                <thead>
                <tr>
                    <th style={{textAlign: "center"}}>유저이름</th>
                    <th style={{textAlign: "center"}}>포인트</th>
                </tr>
                </thead>
                <tbody>
                {/*<tr key={loginInfo.userId}>*/}
                <tr key = {`${User.userId}`}>
                    <td>
                        <input style={{textAlign: "center", width: "100%", border: "0"}}
                            type="text" readOnly={true}
                            value={User.name}
                        />
                    </td>
                    <td>
                        <input style={{textAlign: "center", width: "100%", border: "0"}}
                            type="text" readOnly={true}
                            value={User.point}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>)
}


export default MyPoints;