import React from 'react';
import classes from "../../../styles/common/Header.module.css"

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.left}>여기어때</div>
            <div className={classes.right}>예약 정보 수정</div>
        </div>
    );
}

export default Header;
